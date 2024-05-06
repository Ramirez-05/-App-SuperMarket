from fastapi import APIRouter, Depends, HTTPException, Response, Request, Cookie
from sqlalchemy.orm import Session
from db.connection import get_session
from Api.crud.auth import authenticate_user, get_user_by_email
from core.utils import get_user_by_id
from core.security import create_access_token, verify_token
from Api.schemas.auth import Token, AuthBase
from Api.schemas.resetPassword import ResetPassword
from core.email_utils import send_email, generate_html_content, generate_verification_code, saveCode

router = APIRouter()

# Ruta para iniciar sesión y obtener un token JWT
@router.post("/login", response_model=Token)
async def login_for_access_token(auth_data: AuthBase, response: Response, db: Session = Depends(get_session)): 
    user = authenticate_user(auth_data, db)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password", headers={"WWW-Authenticate": "Bearer"})
    access_token = create_access_token(data={"sub": user.id_usuario})
    response.set_cookie(key="ADT", value=access_token, httponly=True, secure=True, samesite="Strict")
    return {"access_token": access_token, "token_type": "bearer"} 

# Función para obtener el usuario actual basado en el token JWT proporcionado
async def get_current_user(request: Request, db: Session = Depends(get_session)):
    token = request.cookies.get("ADT")
    if token is None:
        raise HTTPException(status_code=401, detail="Missing token")
    user = await verify_token(token)
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token")
    user_db = get_user_by_id(user, db)
    if user_db is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user_db

# Ruta para mandar un código al correo del usuario para restablecer la contraseña
@router.post("/reset-password")
async def reset_password(resetPassword: ResetPassword, db: Session = Depends(get_session)):
    user = get_user_by_email(resetPassword.email, db)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    # Genera un código de verificación de 6 dígitos
    verification_code = generate_verification_code(db)
    # Genera el contenido HTML aquí dentro de la ruta
    html_content = generate_html_content(verification_code)
    send_email(resetPassword.email, html_content)
    # Guarda el código de verificación en la base de datos
    saveCode(db, verification_code, user.id_usuario)
    return {"message": "ok"}
