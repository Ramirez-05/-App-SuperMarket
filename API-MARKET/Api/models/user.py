from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from Api.models.base_class import Base
from Api.models.person import Person
from Api.models.role import Rol

class User(Base):
    __tablename__ = 'usuarios'

    id_usuario = Column(Integer, primary_key=True, autoincrement=True)
    id_persona = Column(Integer, ForeignKey('persona.id_persona'), nullable=False)
    correo = Column(String(255), nullable=False)
    contrasena = Column(String(255), nullable=False)
    id_role = Column(Integer, ForeignKey('roles.id_role'), nullable=False)
    estado = Column(Boolean, default=True, nullable=False)

    person = relationship("Person", back_populates="usuarios")
    role = relationship("Rol", back_populates="usuarios")
