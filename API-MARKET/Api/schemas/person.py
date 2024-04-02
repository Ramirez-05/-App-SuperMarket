from pydantic import BaseModel

class PersonBase(BaseModel):
    cedula: str
    nombres: str
    apellidos: str
    direccion: str
    telefono: str
    
class PersonRead(BaseModel):
    id_persona: int



