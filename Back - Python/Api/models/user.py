from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from Api.models.base_class import Base
from Api.models.person import Person
from Api.models.role import Rol
from Api.models.stock import Stock 

class User(Base):
    __tablename__ = 'usuarios'

    id_usuario = Column(String(255), primary_key=True)
    id_persona = Column(Integer, ForeignKey('persona.id_persona'), nullable=False)
    correo = Column(String(255), nullable=False)
    contrasena = Column(String(255), nullable=False)
    id_role = Column(Integer, ForeignKey('roles.id_role'), nullable=False)
    estado = Column(Boolean, default=True, nullable=False)

    person = relationship("Person", back_populates="usuarios")
    role = relationship("Rol", back_populates="usuarios")
    solicitudes_restablecimiento_contrasena = relationship("ResetPassword", back_populates="user")
    stock = relationship("Stock", back_populates="usuarios")
     