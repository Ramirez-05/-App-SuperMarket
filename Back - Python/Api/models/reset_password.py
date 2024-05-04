from sqlalchemy import Column, Integer, String, DateTime, Enum, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from datetime import datetime, timedelta
from Api.models.base_class import Base


class ResetPassword(Base):
    __tablename__ = 'solicitudes_restablecimiento_contrasena'

    solicitud_id = Column(Integer, primary_key=True, autoincrement=True)
    id_usuario = Column(String(255), ForeignKey('usuarios.id_usuario'), nullable=False)
    codigo_verificacion = Column(String(10), nullable=False)
    fecha_creacion = Column(DateTime, nullable=False, server_default=func.now())
    fecha_expiracion = Column(DateTime, nullable=False, default=datetime.utcnow() + timedelta(minutes=3)) 
    estado_solicitud = Column(Enum('pendiente', 'completada', 'expirada'), nullable=False, default='pendiente')

    user = relationship("User", back_populates="solicitudes_restablecimiento_contrasena")
