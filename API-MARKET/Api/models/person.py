from sqlalchemy import Column, String, Integer
from Api.models.base_class import Base
from sqlalchemy.orm import relationship

class Person(Base):
    __tablename__ = 'persona'

    id_persona = Column(Integer, primary_key=True, autoincrement=True)
    cedula = Column(String(15), nullable=False)
    nombres = Column(String(85), nullable=False)
    apellidos = Column(String(85), nullable=False)
    direccion = Column(String(255), nullable=False)
    telefono = Column(String(85), nullable=False)

    usuarios = relationship("User", back_populates="person")
