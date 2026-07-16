from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from auth.permissions import require_role
from auth.roles import Role
from database.dependencies import get_db

from repositories.user_repository import UserRepository
from services.user_service import UserService

router = APIRouter(
    prefix="/users",
    tags=["Usuários"]
)

@router.get("/config")
def configuracoes(
    current_user=Depends(require_role("dev"))
):
    return {"status": "ok"}

@router.get("/users")
def listar_usuarios(
    current_user=Depends(
        require_role(
            "dev",
            "coordenador"
        )
    )
):
    ...