from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from Api.crud.person import create_new_person_user
from Api.schemas.person import PersonBase
from Api.schemas.role import RoleRead
from Api.schemas.user import UserBase

from db.connection import get_session

router = APIRouter()

@router.post("/addperson", response_model=PersonBase)
async def add_person(persona: PersonBase,user:UserBase,role:RoleRead ,db: Session = Depends(get_session)):
    print("persona",persona)
    print("user",user.correo,".........")
    print("user",user.contrasena)
    print("role",role)
    return create_new_person_user(persona,user,role,db)
