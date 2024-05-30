from pydantic import BaseModel
from typing import Optional

class PersonBase(BaseModel):
    cedula: str
    nombres: str
    apellidos: str
    direccion: str
    telefono: str
    
class PersonRead(BaseModel):
    id_persona: int

class GetPerson(BaseModel):
    skip: Optional[int] = None
    limit: Optional[int] = None


