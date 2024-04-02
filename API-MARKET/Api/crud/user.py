from Api.models.user import User
from sqlalchemy.orm import Session
#from Api.schemas.person import PersonRead
from Api.schemas.user import UserCreate
from Api.schemas.role import RoleRead
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
        

