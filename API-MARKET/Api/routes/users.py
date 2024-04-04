from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from Api.schemas.user import UserCreate
from Api.crud.user import checkRole,userStatus
from db.connection import get_session

router = APIRouter()

@router.get("/check-role", response_model=bool)
async def function_check_role(id_persona: int, db: Session = Depends(get_session)):
    return checkRole(id_persona, db)

@router.get("/user-status", response_model=bool)
async def function_user_status(id_persona: int, db: Session = Depends(get_session)):
    return userStatus(id_persona, db)