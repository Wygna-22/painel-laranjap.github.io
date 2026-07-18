from fastapi import FastAPI
from fastapi import Depends
from app.routers.users import router as user_router
from app.routers.auth import router as auth_router
from app.dependencies.auth import get_current_user
from app.models.user import User

app = FastAPI(
    title="Painel Laranja API",
    version="1.0.0",
)

app.include_router(user_router)
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "🍊 Painel Laranja API"}

@app.get("/me")
def me(
    current_user: User = Depends(get_current_user),
):
    return {
        "id": str(current_user.id),
        "nome": current_user.nome,
        "email": current_user.email,
        "perfil": current_user.perfil,
    }