from fastapi import APIRouter, FastAPI
from Api.routes import auth,person
from core.config import settings
from fastapi.middleware.cors import CORSMiddleware

api_router = APIRouter()


api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(person.router, prefix="/person", tags=["addperson"])

app = FastAPI(title=settings.PROJECT_NAME, version=settings.PROJECT_VERSION, description=settings.PROJECT_DESCRIPTION)  
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)
app.include_router(api_router)

