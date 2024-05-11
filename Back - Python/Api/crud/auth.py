from Api.models.user import User
from sqlalchemy.orm import Session
from core.security import verify_password
from Api.schemas.auth import AuthBase
from Api.models.token import Token
from datetime import datetime
from fastapi import HTTPException, Response
import sys

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

# Función para guardar el token en la base de datos
def save_code_token(token:str, db: Session):
    dbtoken = Token(
        token = token,
        fecha_de_creacion = datetime.now() 
    )
    try:
        db.add(dbtoken)
        db.commit()
        db.refresh(dbtoken)
        return dbtoken
    except Exception as e:
        db.rollback()
        print(f"error al guardar el token: {str(e)}",file=sys.stderr)
        raise HTTPException(status_code=500,detail=f"no se pudo agregar token: {str(e)}")

# Función para cerrar la sesión eliminando el token de la base de datos y las cookies
def close_session(token:str, db:Session, response: Response):
    try:
        #busca en la db si se encuentra el token
        token_for_delete = db.query(Token).filter(Token.token == token).first()
        if token_for_delete:
            db.delete(token_for_delete)
            db.commit()
            #elimina las cookies que sea igual a la de la base de datos
            response.delete_cookie("ADT")
            return ("EL TOKEN ELIMINADO ES: ",token_for_delete)
        else:
            raise HTTPException(status_code=404, detail="Token no encontrado")
    except Exception as e:
        print(f"error al cerrar sesion: {str(e)}",file=sys.stderr)
        raise HTTPException(status_code=500,detail=f"no se pudo cerrar sesion: {str(e)}")
    

#Funcion encargada de traer la cantidad de tokens que hay en la db
def token_counter(db: Session):
    try:
        # Utiliza SQLAlchemy para realizar la consulta de conteo
        db_tokens_count = db.query(Token).count()
        return db_tokens_count
    except Exception as e:
        print(f"Error al contar los tokens: {str(e)}", file=sys.stderr)
        raise HTTPException(status_code=500, detail=f"No se pudo contar los tokens: {str(e)}")

