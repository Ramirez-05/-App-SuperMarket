from Api.models.user import User
from sqlalchemy.orm import Session
from sqlalchemy.exc import OperationalError
from sqlalchemy.sql import text
from Api.models.person import Person
from Api.schemas.person import PersonBase

# Función para obtener una persona por su cédula
def get_person_by_cedula(persona: PersonBase ,db:Session):
    person = db.query(Person).filter(Person.cedula == persona.cedula).first()
    return person

# Función para verificar si el servidor de base de datos está disponible y acepta conexiones
def serverStatus(db):
    try:
        db.execute(text('SELECT 1'))
        return True
    except OperationalError:
        return False

# Funcion para verificar si el usuario es administrador
def checkRole(id_role: int, db: Session):
    user = db.query(User).filter(User.id_role == id_role).first()
    if user.id_role == 1:
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
