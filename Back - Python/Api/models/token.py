from sqlalchemy import Column, Integer, String, DateTime
from Api.models.base_class import Base

class Token(Base):
    __tablename__ = 'token'

    id_token = Column(Integer, primary_key=True, autoincrement=True)
    token = Column(String(255), nullable=False)
    fecha_de_creacion = Column(DateTime, nullable=False)

