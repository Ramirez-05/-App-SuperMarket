from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from Api.crud.person import create_new_person_user,update_person, get_person
from Api.schemas.person import PersonBase, GetPerson
from Api.schemas.role import RoleRead
from Api.schemas.user import UserBase,UserRead
from db.connection import get_session
from Api.routes.auth import get_current_user
from core.utils import checkRole,serverStatus,userStatus

router = APIRouter()

@router.post("/create-persona", response_model=PersonBase)
async def add_person(persona: PersonBase,user:UserBase,role:RoleRead ,db: Session = Depends(get_session)):
        print("Entro a la funcion crear persona")
        return create_new_person_user(persona,user,role,db)


@router.put("/update-persona", response_model=PersonBase)
async def function_update_person(persona: PersonBase, db: Session = Depends(get_session)):
    return update_person(persona, db)

@router.post("/get-persons")
async def get_all_person(getperson: GetPerson = Depends(GetPerson),db: Session = Depends(get_session)):
        print("Entro a la funcion obtener personas")
        return get_person(getperson,db)         