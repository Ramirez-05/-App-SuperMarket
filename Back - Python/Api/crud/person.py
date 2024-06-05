from Api.models.person import Person
from Api.models.user import User
from sqlalchemy.orm import Session
from sqlalchemy.exc import OperationalError
from sqlalchemy.sql import text
from Api.schemas.person import PersonBase, GetPerson
from Api.schemas.role import RoleRead
from Api.schemas.user import UserBase, UserCreate
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
# Función para actualizar una persona
def update_person(persona: PersonBase, db: Session):
    db_person = get_person_by_cedula(persona.cedula, db)
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
        print(f"Error al actualizar persona: {str(e)}", file=sys.stderr)
        raise HTTPException(status_code=500, detail=f"No se pudo actualizar la persona: {str(e)}")  

###############################################################################################################
#Funcion encargada de traer todos los datos para agregarlos
#a la datatable users en el dashboard
def get_person(getperson: GetPerson, db: Session):
    try:
        # Realizar la consulta unida y seleccionar los campos específicos
        query = (
            db.query(User.id_usuario,User.estado, User.correo, User.id_role, Person.cedula, Person.nombres, 
            Person.apellidos, Person.direccion, Person.telefono)
            .join(Person, User.id_persona == Person.id_persona)
            .offset(getperson.skip)
            .limit(getperson.limit)
            .all()
        )
        
        #Es importando formatear el resultado para poder retornarlo
        result = [
            {
                "id_usuario": user_id_usuario,
                "estado": user_estado,
                "correo":user_correo,
                "id_role": user_id_role,
                
                "person": {
                    "cedula": person_cedula,
                    "nombres": person_nombres,
                    "apellidos": person_apellidos,
                    "direccion": person_direccion,
                    "telefono": person_telefono
                }
            }
            for user_id_usuario, user_estado, user_correo, user_id_role,person_cedula, person_nombres, person_apellidos, person_direccion, person_telefono in query
        ]
        
        return result

    except Exception as e:
        print(f"Error al obtener usuarios: {str(e)}", file=sys.stderr)
        raise HTTPException(status_code=500, detail=f"No se pudo obtener personas: {str(e)}")
    

