from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from sqlalchemy.orm import Session
from db.connection import get_session
from Api.crud.auth import  authenticate_user
from core.utils import get_user_by_id
from core.security import create_access_token, verify_token
from Api.schemas.auth import Token

router = APIRouter()

# Se crea una instancia de OAuth2PasswordBearer para manejar el esquema de autenticación OAuth2
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/login")

# Función para obtener el usuario actual basado en el token JWT proporcionado
async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_session)):
    user = await verify_token(token)
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token")
    user_db = get_user_by_id(user, db)
    if user_db is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user_db

@router.post("/login", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_session)):
    user = authenticate_user(form_data, db)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password", headers={"WWW-Authenticate": "Bearer"})
    access_token = create_access_token(data={"sub": user.id_usuario})
    return {"access_token": access_token, "token_type": "bearer"} 

