from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from auth.current_user import get_current_user
from database.dependencies import get_db
from repositories.user_repository import UserRepository
from services.user_service import UserService
from uuid import UUID

router = APIRouter(
    prefix="/users",
    tags=["Usuários"]
)

@router.get("/")
def list_users(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    repository = UserRepository(db)
    service = UserService(repository)

    return service.get_all_users()

@router.get("/{user_id}")
def get_user(
    user_id: UUID,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    repository = UserRepository(db)
    service = UserService(repository)

    return service.get_user_by_id(user_id)