from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from core.config import settings
from sqlalchemy.orm import Session

# Configurar hashing de contraseñas
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Función para generar hash de contraseñas
def get_hashed_password(password: str):
    return pwd_context.hash(password)

# Función para verificar contraseñas hasheadas
def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

# Función para crear un token JWT
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
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