from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.jwt import create_access_token
from app.schemas.user import Token, UserLogin
from app.services.user import user_service

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)

@router.post(
    "/login",
    response_model=Token,
)
def login(
    credentials: UserLogin,
    db: Session = Depends(get_db),
):
    user = user_service.authenticate(
        db,
        credentials.email,
        credentials.senha,
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="E-mail ou senha inválidos.",
        )

    token = create_access_token(
        {
            "sub": str(user.id),
            "perfil": user.perfil.value,
        }
    )

    return Token(
        access_token=token
    )