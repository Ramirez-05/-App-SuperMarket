from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.connection import get_session
from Api.crud.product import get_products

router = APIRouter()

@router.get("/get-products")
async def get_all_products(db: Session = Depends(get_session)):
        print("Entro a la funcion traer productos")
        return get_products(db)