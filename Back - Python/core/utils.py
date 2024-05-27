from Api.models.user import User
from sqlalchemy.orm import Session
from Api.models.person import Person
from Api.schemas.person import PersonBase
from sqlalchemy.exc import OperationalError
from sqlalchemy import text
import secrets
import string
from typing import Optional
from sqlalchemy.orm import Session
from Api.models.role import Rol
from Api.schemas.user import UserEmail

# Función para obtener una persona por su cédula
def get_person_by_cedula(persona: PersonBase ,db:Session):
    person = db.query(Person).filter(Person.cedula == persona.cedula).first()
    return person

# Función para obtener una persona por su id
def get_user_by_id(id_usuario: str ,db:Session):
    user = db.query(User).filter(User.id_usuario == id_usuario).first()
    return user

def get_user_by_correo(correo: str, db: Session):
    return db.query(User).filter(User.correo == correo).first()

# Función para verificar si el servidor de base de datos está disponible y acepta conexiones
def serverStatus(db):
    try:
        db.execute(text('SELECT 1'))
        return True
    except OperationalError:
        return False


#  Funcion para verificar si el usuario es administrador
# def checkRole(id_role: int, db: Session, cedula: str,id_persona: int):
#     role = db.query(Rol).filter(Rol.id_role == id_role).first()
#     person = db.query(Person).filter(Person.cedula == cedula).first()
#     if role.nombre == "Administrador" or person.id_persona == id_persona:
#         return True
#     else:
#         return False

def checkRole(*args):
    if len(args) == 2:  
        id_role, db = args
        if id_role is None or db is None:
            return False
        else:
            role = db.query(Rol).filter(Rol.id_role == id_role).first()
            if role.nombre == "Administrador":
                return True
            else:
                return False
    elif len(args) == 4:  
        id_role, db, cedula, id_persona = args
        if id_role is None or db is None or cedula is None or id_persona is None:
            return False
        else:
            role = db.query(Rol).filter(Rol.id_role == id_role).first()
            person = db.query(Person).filter(Person.cedula == cedula).first()
            if role.nombre == "Administrador" or person.id_persona == id_persona:
                return True
            else:
                return False
    else:
        raise TypeError("Número incorrecto de argumentos")

# Funcion para verificar el estado del usuario
def userStatus(id_usuario: int, db: Session):
    user = db.query(User).filter(User.id_usuario == id_usuario).first()
    if user.estado == 1:
        return True
    else:
        return False
    
#funcion para generar un id de usuario aleatorio
def generateuser_id(length=30):
    #caracteres posibles para el id
    characters = string.ascii_letters + string.digits
    #generar el id aleatorio
    random_id = ''.join(secrets.choice(characters) for _ in range(length))

    return random_id



