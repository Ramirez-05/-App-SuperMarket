from sqlalchemy import Column, Integer, String, ForeignKey, DECIMAL
from sqlalchemy.orm import relationship
from Api.models.base_class import Base
from Api.models.category import Categoria
from Api.models.stock import Stock

class Producto(Base):
    __tablename__ = 'productos'

    id_producto = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(85), nullable=False)
    descripcion = Column(String(255), nullable=False)
    id_categoria = Column(Integer, ForeignKey('categorias.id_categoria'), nullable=False)
    precio = Column(DECIMAL(10, 2), nullable=False)

    categoria = relationship("Categoria", back_populates="productos")
    stocks = relationship("Stock", back_populates="producto")
