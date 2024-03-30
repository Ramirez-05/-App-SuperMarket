from sqlalchemy import Column, Integer, String, ForeignKey, Date, DECIMAL
from sqlalchemy.orm import relationship
from Api.models.base_class import Base

class Producto(Base):
    __tablename__ = 'productos'

    id_producto = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(85), nullable=False)
    descripcion = Column(String(255), nullable=False)
    id_categoria = Column(Integer, ForeignKey('categorias.id_categoria'), nullable=False)
    precio = Column(DECIMAL(10, 2), nullable=False)
    fecha_vencimiento = Column(Date, nullable=False)

    category = relationship("Categoria", back_populates="productos")
