from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.dependencies import get_db
from repositories.user_repository import UserRepository
from schemas.user_schema import UserCreate, UserResponse
from schemas.user_schema import UserLogin, Token
from services.user_service import UserService
from auth.current_user import get_current_user

router = APIRouter(
    prefix="/auth",
    tags=["Autenticação"]
)

@router.post(
    "/register",
    response_model=UserResponse,
    status_code=201
)
def register(
    data: UserCreate,
    db: Session = Depends(get_db)
):
    repository = UserRepository(db)
    service = UserService(repository)

    user = service.create_user(data)

    return user

@router.post(
    "/login",
    response_model=Token
)
def login(
    data: UserLogin,
    db: Session = Depends(get_db)
):
    repository = UserRepository(db)
    service = UserService(repository)

    return service.login(data)

@router.get("/me")
def me(
    current_user = Depends(get_current_user)
):
    return current_user