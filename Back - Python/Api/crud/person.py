from Api.models.person import Person
from sqlalchemy.orm import Session
from sqlalchemy.exc import OperationalError
from sqlalchemy.sql import text
from Api.schemas.person import PersonBase
from Api.schemas.role import RoleRead
from Api.schemas.user import UserBase
from Api.crud.user import create_new_user
from fastapi import HTTPException
from core.utils import get_person_by_cedula
import sys

def create_new_person_user(persona: PersonBase,user:UserBase,role:RoleRead ,db:Session):
    db_person = Person(
        cedula = persona.cedula,
        nombres = persona.nombres,
        apellidos = persona.apellidos,
        direccion = persona.direccion,
        telefono = persona.telefono,
    )
    try:
        db.add(db_person)
        db.commit()
        db.refresh(db_person)
        create_new_user(db_person.id_persona,user,role.id_role,db)
        return db_person
    except Exception as e:
        db.rollback()
        print(f"error al crear persona: {str(e)}",file=sys.stderr)
        raise HTTPException(status_code=500,detail=f"no se pudo agregar la persona: {str(e)}")

###############################################################################################################
    
def update_person(persona: PersonBase, db: Session):
    db_person = get_person_by_cedula(persona, db)
    if db_person is None:
        raise HTTPException(status_code=404, detail="La persona no existe")
    try:
        db_person.nombres = persona.nombres
        db_person.apellidos = persona.apellidos
        db_person.direccion = persona.direccion
        db_person.telefono = persona.telefono
        db.commit()
        db.refresh(db_person)
        return db_person
    except Exception as e:
        db.rollback()
        print(f"error al actualizar persona: {str(e)}",file=sys.stderr)
        raise HTTPException(status_code=500,detail=f"no se pudo actualizar la persona: {str(e)}")    

###############################################################################################################


