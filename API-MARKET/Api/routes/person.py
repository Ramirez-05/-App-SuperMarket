from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from Api.crud.person import create_new_person_user, update_person,server_status
from Api.schemas.person import PersonBase, PersonRead
from Api.schemas.role import RoleRead
from Api.schemas.user import UserBase
from db.connection import get_session

router = APIRouter()

@router.post("/create-persona", response_model=PersonBase)
async def add_person(persona: PersonBase,user:UserBase,role:RoleRead ,db: Session = Depends(get_session)):
    return create_new_person_user(persona,user,role,db)

@router.put("/update-persona", response_model=PersonBase)
async def fuction_update_person(persona: PersonBase, db:Session = Depends(get_session)):
    return update_person(persona, db)

@router.get("/server-status", response_model=bool)
async def function_server_status(db: Session = Depends(get_session)):
    return server_status(db)