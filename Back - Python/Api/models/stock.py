from sqlalchemy import Column, Integer, String, ForeignKey, Boolean,Date
from sqlalchemy.orm import relationship
from Api.models.base_class import Base

class Stock(Base):
    __tablename__ = 'stock'

    id_stock = Column(Integer, primary_key=True, autoincrement=True)
    id_usuario = Column(String(255), ForeignKey('usuarios.id_usuario'), nullable=False)
    id_producto = Column(Integer, ForeignKey('productos.id_producto'), nullable=False)
    cantidad = Column(Integer, nullable=False)
    lote = Column(String(85), nullable=False)
    estado = Column(Boolean, nullable=False)
    fecha_de_vencimiento = Column(Date, nullable=False)

    user = relationship("User", back_populates="stock")