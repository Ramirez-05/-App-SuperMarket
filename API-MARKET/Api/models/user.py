from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from Api.models.base_class import Base

class Usuario(Base):
    __tablename__ = 'usuarios'

    id_usuario = Column(Integer, primary_key=True, autoincrement=True)
    id_persona = Column(Integer, ForeignKey('persona.id_persona'), nullable=False)
    correo = Column(String(255), nullable=False)
    contrasena = Column(String(255), nullable=False)
    id_role = Column(Integer, ForeignKey('roles.id_role'), nullable=False)
    estado = Column(Boolean, nullable=False)

    person = relationship("Persona", back_populates="usuario")
    role = relationship("Rol", back_populates="usuarios")
