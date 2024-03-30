from Api.models.user import Usuario
from sqlalchemy.orm import Session

# Función para obtener un usuario por su ID
def get_user_by_id(id_usuario: int, db: Session):
    user = db.query(Usuario).filter(Usuario.id_usuario == id_usuario).first()
    return user
