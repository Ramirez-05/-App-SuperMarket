from Api.models.stock import Stock
from sqlalchemy.orm import Session
from fastapi import HTTPException
import sys

# Funcion para obtener los datos de stock
def get_stock(db: Session):
    try:
        stock = db.query(Stock).all()
        return stock
    except Exception as e:
        print(f"Error al obtener stock: {str(e)}", file=sys.stderr)
        raise HTTPException(status_code=500, detail=f"No se pudo obtener stock: {str(e)}")