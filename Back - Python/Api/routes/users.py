from fastapi import APIRouter, Depends
from db.connection import get_session
from sqlalchemy.orm import Session
from Api.schemas.user import GetUser
from Api.crud.user import get_users


router = APIRouter()

@router.post("/get-users")
async def get_all_users(getuser: GetUser,db: Session = Depends(get_session)):
        print("Entro a la funcion obtener usuarios")
        return get_users(getuser,db)                 