from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from Api.schemas.user import UserRead
from db.connection import get_session
from Api.routes.auth import get_current_user
from Api.crud.stock import get_stock, due_date_stock
from core.utils import checkRole, serverStatus, userStatus

router = APIRouter()

# Ruta para obtener los datos de stock
@router.get("/get-stock")
async def get_stock_route(db: Session = Depends(get_session), current_user: UserRead = Depends(get_current_user)):
    if not serverStatus(db):
        raise HTTPException(status_code=503, detail="La base de datos no esta disponible")
    if not checkRole(current_user.id_role, db):
        raise HTTPException(status_code=401, detail="No tienes permisos para realizar esta acción")
    if not userStatus(current_user.id_usuario, db):
        raise HTTPException(status_code=401, detail="Tu usuario esta inactivo")
    return get_stock(db) 

#Ruta de obtener lote proximo a vencer
@router.get("/due-date")
async def get_due_date(db: Session = Depends(get_session)):
        print("Entro a la funcion lote mas proximo a vencer")
        return due_date_stock(db)