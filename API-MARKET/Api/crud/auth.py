from Api.models.user import User  
from sqlalchemy.orm import Session  
from core.security import verify_password 
from Api.schemas.auth import AuthBase


# Función para obtener un usuario por su dirección de correo electrónico
def get_user_by_email(email: str, db: Session):
    user = db.query(User).filter(User.correo == email).first()
    return user

# Función para autenticar un usuario
def authenticate_user(credentials: AuthBase, db: Session):
    user = get_user_by_email(credentials.username, db)
    if not user:
        return False
    if not verify_password(credentials.password, user.contrasena):
        return False
    return user
