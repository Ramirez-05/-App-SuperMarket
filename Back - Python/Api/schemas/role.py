from pydantic import BaseModel

class RoleBase(BaseModel):
    nombre: str
    descripcion: str

class RoleRead(BaseModel):
    id_role: int
    
