from Api.models.user import User
from sqlalchemy.orm import Session
from Api.models.person import Person
from Api.schemas.person import PersonBase
from sqlalchemy.exc import OperationalError
from sqlalchemy import text
import secrets
import string

# Función para obtener una persona por su cédula
def get_person_by_cedula(persona: PersonBase ,db:Session):
    person = db.query(Person).filter(Person.cedula == persona.cedula).first()
    return person

# Función para obtener una persona por su id
def get_user_by_id(id_usuario: str ,db:Session):
    user = db.query(User).filter(User.id_usuario == id_usuario).first()
    return user

# Función para verificar si el servidor de base de datos está disponible y acepta conexiones
def serverStatus(db):
    try:
        db.execute(text('SELECT 1'))
        return True
    except OperationalError:
        return False

# Funcion para verificar si el usuario es administrador
def checkRole(id_role: int, db: Session, cedula: str,id_persona: int):
    user = db.query(User).filter(User.id_role == id_role).first()
    person = db.query(Person).filter(Person.cedula == cedula).first()
    if user == 1 or person.id_persona == id_persona:
        return True
    else:
        return False

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



