from Api.models.user import User
from sqlalchemy.orm import Session
from Api.models.person import Person
from Api.schemas.person import PersonBase

# Función para obtener una persona por su cédula
def get_person_by_cedula(persona: PersonBase ,db:Session):
    person = db.query(Person).filter(Person.cedula == persona.cedula).first()
    return person


# Función para obtener una persona por su id
def get_user_by_id(persona: PersonBase ,db:Session):
    person = db.query(Person).filter(Person.id_persona == persona.id_persona).first()
    return person



