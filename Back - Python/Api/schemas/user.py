from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    correo: EmailStr
    contrasena: str

class UserCreate(UserBase):
    estado: bool = True
    id_persona: int 
    id_role: int 

class UserRead(UserBase):
    id_usuario: str
    estado: bool
    id_persona: int
    id_role: int

class GetUser(BaseModel):
    skip: int
    limit: int