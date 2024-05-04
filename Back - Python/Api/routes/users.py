from fastapi import APIRouter, Depends
from db.connection import get_session
from sqlalchemy.orm import Session
from Api.schemas.user import GetUser
from Api.crud.user import get_users,disabled_users,active_users


router = APIRouter()

@router.post("/get-users")
async def get_all_users(getuser: GetUser = Depends(GetUser),db: Session = Depends(get_session)):
        print("Entro a la funcion obtener usuarios")
        return get_users(getuser,db)         

@router.get("/get-user-disabled")    
async def get_user_disabled(db: Session = Depends(get_session)):
        print("Entro a la funcion obtener usuarios desactivados") 
        return disabled_users(db)

@router.get("/get-user-active")    
async def get_user_active(db: Session = Depends(get_session)):
        print("Entro a la funcion obtener usuarios activados") 
        return active_users(db)