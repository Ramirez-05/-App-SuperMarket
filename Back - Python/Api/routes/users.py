from fastapi import APIRouter, Depends,HTTPException
from db.connection import get_session
from sqlalchemy.orm import Session
from Api.schemas.user import GetUser, UserEmail, UserUpdate,UserBase
from Api.crud.user import get_users,disabled_users,active_users, role_user, update_user


router = APIRouter()

@router.post("/get-users")
async def get_all_users(getuser: GetUser = Depends(GetUser),db: Session = Depends(get_session)):
        print("Entro a la funcion obtener usuarios")
        return get_users(getuser,db)         

@router.get("/get-user-disabled")    
async def get_user_disabled(db: Session = Depends(get_session)):
        print("Entro a la funcion obtener usuarios desactivados") 
        return disabled_users(db)

@router.get("/get-user-active")    
async def get_user_active(db: Session = Depends(get_session)):
        print("Entro a la funcion obtener usuarios activados") 
        return active_users(db)

@router.post("/get-role-user")
async def get_role_user(user_email: UserEmail, db: Session = Depends(get_session)):
    print("Entró a la función para traer el rol del usuario")
    role = role_user(user_email.correo, db)  # Asegúrate de acceder al atributo 'correo'
    if not role:
        print("No hay usuario con ese correo")
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return role

@router.post("/update-user")
async def put_update_user(user: UserUpdate, db: Session = Depends(get_session)):
      print("Entro a la funcion actualizar usuario")
      user = update_user(user, db)
      return ("El usuario actualizado fue: ",user.id_usuario,"correo = ",user.correo)