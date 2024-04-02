from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from Api.models.base_class import Base

class Rol(Base):
    __tablename__ = 'roles'

    id_role = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(85), nullable=False)
    descripcion = Column(String(255), nullable=False)

    usuarios = relationship("User", back_populates="role")
    
