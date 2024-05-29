from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Api.routes import auth, person, users, stock, product
from core.config import settings

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(person.router, prefix="/person", tags=["person"])
api_router.include_router(users.router, prefix="/users", tags=["user"])
api_router.include_router(stock.router, prefix="/stock", tags=["stock"])
api_router.include_router(product.router, prefix="/product", tags=["product"])

app = FastAPI(
    title=settings.PROJECT_NAME, 
    version=settings.PROJECT_VERSION, 
    description=settings.PROJECT_DESCRIPTION
)

# Configurar CORS con especificidad
origins = [
    "http://localhost:3000",  # Origen permitido para las solicitudes
    "https://example.com",    # También puedes agregar otros orígenes si es necesario
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Métodos permitidos
    allow_headers=["Authorization", "Content-Type"],  # Encabezados permitidos
)

app.include_router(api_router)
