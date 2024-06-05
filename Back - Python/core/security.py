from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from core.config import settings
from sqlalchemy.orm import Session
from sqlalchemy import exc
from Api.models.token import Token

# Configurar hashing de contraseñas
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Función para generar hash de contraseñas
def get_hashed_password(password: str):
    return pwd_context.hash(password)

# Función para verificar contraseñas hasheadas
def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

# Función para crear o actualizar un token en la base de datos
def save_token(db: Session, token: str):
    try:
        existing_token = db.query(Token).filter(Token.token == token).first()
        if existing_token:
            # Si el token ya existe, actualizamos la fecha de creación
            existing_token.fecha_de_creacion = datetime.utcnow()
        else:
            # Si el token no existe, lo creamos
            new_token = Token(
                token=token,
                fecha_de_creacion=datetime.utcnow()
            )
            db.add(new_token)
        db.commit()
    except exc.SQLAlchemyError as e:
        db.rollback()
        print(f"Error saving token: {str(e)}")
        raise

# Función para crear un token JWT
def create_access_token(data: dict, db: Session):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    
    # Guardar o actualizar el token en la base de datos
    save_token(db, encoded_jwt)
    
    return encoded_jwt


# Función para verificar si un token JWT es válido
async def verify_token(token: str, db: Session):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        token: str = payload.get("sub")
        if token is None:
            raise JWTError("Invalid token payload")

        expire = payload.get("exp")
        if expire is not None:
            expire_datetime = datetime.fromtimestamp(expire, tz=timezone.utc)
            if datetime.now(timezone.utc) > expire_datetime:
                print("Token expired")
                return False, "expired"
        return token, "valid"
    except jwt.ExpiredSignatureError:
        return False, "expired"
    except JWTError as e:
        print(f"Token verification error: {str(e)}")
        return False, "invalid"