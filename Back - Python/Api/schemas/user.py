from pydantic import BaseModel, EmailStr
from typing import Optional

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

class UserEmail(BaseModel):
    correo: EmailStr

class GetUser(BaseModel):
    skip: Optional[int] = None
    limit: Optional[int] = None

class UserUpdate(UserEmail):
    correo: Optional[EmailStr] = None
    id_usuario: Optional[int] = None
    id_role: Optional[int] = None
