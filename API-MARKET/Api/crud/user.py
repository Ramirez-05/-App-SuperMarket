from Api.models.user import User
from sqlalchemy.orm import Session
from Api.schemas.user import UserCreate
from fastapi import HTTPException
from core.security import get_hashed_password
import sys

def create_new_user(persona: int, usuario: UserCreate, role: int, db:Session) :
        db_user = User(
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
# Funcion para verificar si el usuario es administrador
def checkRole(id_persona: int, db: Session):
    user = db.query(User).filter(User.id_persona == id_persona).first()
    if user.id_role == 1:
        return True
    else:
        return False
    
#####################################################################################################
# Funcion para verificar el estado del usuario
def userStatus(id_persona: int, db: Session):
    user = db.query(User).filter(User.id_persona == id_persona).first()
    if user.estado == True:
        print("El estado es activo")
        return True
    else:
        return False
