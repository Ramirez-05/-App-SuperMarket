
from Api.models.product import Producto
from sqlalchemy.orm import Session
from fastapi import HTTPException
import sys

def get_products(db: Session):
        try:
            products = db.query(Producto).all()
            return products
        except Exception as e:
            print(f"Error al obtener productos: {str(e)}", file=sys.stderr)
            raise HTTPException(status_code=500, detail=f"No se pudo obtener productos: {str(e)}")
            