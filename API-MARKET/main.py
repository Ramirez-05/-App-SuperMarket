from fastapi import APIRouter, FastAPI
from Api.routes import auth
from core.config import settings

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])

app = FastAPI(title=settings.PROJECT_NAME, version=settings.PROJECT_VERSION, description=settings.PROJECT_DESCRIPTION)  
app.include_router(api_router)

