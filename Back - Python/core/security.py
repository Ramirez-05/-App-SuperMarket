from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import JWTError, jwt
from jose import JWTError, jwt
from datetime import datetime, timezone
from core.config import settings


#configurar hashing de contraseñas
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

#Funcion para generar hash de contraseñas
def get_hashed_password(password:str):
    return pwd_context.hash(password)

#funcion para verificar contraseñas hasheadas
def verify_password(plain_password:str, hashed_password:str):
    return pwd_context.verify(plain_password, hashed_password)

#Funcion para crear un token JWT
def create_access_token(data:dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=1) 
    to_encode.update({"exp":expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

# Funcion para verificar si un token JWT es valido
async def verify_token(token: str):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        user: str = payload.get("sub")
        if user is None:
            raise JWTError("Invalid token payload")
        
        # Verificar la expiración manualmente (opcional)
        expire = payload.get("exp")
        if expire is not None:
            expire_datetime = datetime.fromtimestamp(expire, tz=timezone.utc)
            if datetime.now(timezone.utc) > expire_datetime:
                print("Token expired")
                return False
        return user
    except jwt.ExpiredSignatureError:
        return False
    except JWTError as e:
        print(f"Token verification error: {str(e)}")
        return None