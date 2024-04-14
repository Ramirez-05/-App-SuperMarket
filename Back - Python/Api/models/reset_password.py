from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, DECIMAL
from sqlalchemy.orm import relationship
from Api.models.base_class import Base

class ResetPassword(Base):
    __tablename__ = 'solicitudes_restablecimiento_contrasena'

    solicitud_id = Column(Integer, primary_key=True, autoincrement=True)
    id_usuario = Column(String(255), ForeignKey('usuarios.id_usuario'), nullable=False)
    codigo_verificacion = Column(String(10), nullable=False)
    fecha_creacion = Column(DateTime, nullable=False)
    fecha_expiracion = Column(DateTime, nullable=False)

    user = relationship("User", back_populates="solicitudes_restablecimiento_contrasena")

