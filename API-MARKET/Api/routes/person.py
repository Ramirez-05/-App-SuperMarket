from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from Api.crud.person import create_new_person_user, update_person,server_status
from Api.crud.user import checkRole
from Api.schemas.person import PersonBase,PersonRead
from Api.schemas.role import RoleRead
from Api.schemas.user import UserBase
from db.connection import get_session
from Api.routes.auth import get_current_user


router = APIRouter()

@router.post("/create-persona", response_model=PersonBase)
async def add_person(persona: PersonBase,user:UserBase,role:RoleRead ,db: Session = Depends(get_session)):
    if server_status(db):
        return create_new_person_user(persona,user,role,db)
    else:
        raise HTTPException(status_code=503, detail="La base de datos no esta disponible o no eres admin")


@router.put("/update-persona", response_model=PersonBase)
async def fuction_update_person(persona: PersonBase, db:Session = Depends(get_session)):
    if server_status(db):
        return update_person(persona, db)
    else:
        raise HTTPException(status_code=503, detail="La base de datos no esta disponible")