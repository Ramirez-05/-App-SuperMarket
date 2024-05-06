from Api.models.user import User
from sqlalchemy.orm import Session
from Api.schemas.user import UserCreate,GetUser, UserRead
from fastapi import HTTPException
from core.security import get_hashed_password
from core.utils import generateuser_id
import sys

def create_new_user(persona: int, usuario: UserCreate, role: int, db:Session) :
        db_user = User(
            id_usuario = generateuser_id(),
            id_persona = persona,
            correo = usuario.correo,
            contrasena = get_hashed_password(usuario.contrasena),
            id_role = role
        )
        try:
            db.add(db_user)
            db.commit()
            db.refresh(db_user)
            return db_user
        except Exception as e:
            db.rollback()
            print(f"error al crear persona: {str(e)}",file=sys.stderr)
            raise HTTPException(status_code=500,detail=f"no se pudo agregar el usuario: {str(e)}")
        
######################################################################################################
#funcion para obtener los usuarios
def get_users(getuser: GetUser,db: Session):
        try:
            users = db.query(User).offset(getuser.skip).limit(getuser.limit).all()
            return users
        except Exception as e:
            print(f"Error al obtener usuarios: {str(e)}", file=sys.stderr)
            raise HTTPException(status_code=500, detail=f"No se pudo obtener usuarios: {str(e)}")


#####################################################################################################
#funcion para traer los usuarios inactivos
def disabled_users(db: Session):
        try:
            disabled_users = db.query(User).filter(User.id_role == 2).filter(User.estado == False).all()
            return disabled_users
        except Exception as e:
            print(f"Error al obtener usuarios: {str(e)}", file=sys.stderr)
            raise HTTPException(status_code=500, detail=f"No se pudo obtener usuarios: {str(e)}")

#######################################################################################################
#funcion para traer los usuarios activos
def active_users(db: Session):
        try:
            active_users = db.query(User).filter(User.id_role == 1).filter(User.estado == True).all()
            return active_users
        except Exception as e:
            print(f"Error al obtener usuarios: {str(e)}", file=sys.stderr)
            raise HTTPException(status_code=500, detail=f"No se pudo obtener usuarios: {str(e)}")
            