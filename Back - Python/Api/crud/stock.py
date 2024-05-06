from Api.models.stock import Stock
from sqlalchemy.orm import Session
from fastapi import HTTPException
from sqlalchemy import asc
import sys

# Funcion para obtener los datos de stock
def get_stock(db: Session):
    try:
        stock = db.query(Stock).all()
        return stock
    except Exception as e:
        print(f"Error al obtener stock: {str(e)}", file=sys.stderr)
        raise HTTPException(status_code=500, detail=f"No se pudo obtener stock: {str(e)}")
    
def due_date_stock(db: Session):
    try:
        stock_due_date = db.query(Stock).filter(Stock.fecha_de_vencimiento.isnot(None)).order_by(asc(Stock.fecha_de_vencimiento)).first()
        return stock_due_date
    except Exception as e:
        print(f"Error al obtener la fecha de vencimiento: {str(e)}", file=sys.stderr)
        raise HTTPException(status_code=500, detail=f"No se pudo obtener la fecha de vencimiento: {str(e)}")