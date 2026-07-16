from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

from auth.auth_bearer import oauth2_scheme
from auth.jwt_handler import decode_access_token
from database.dependencies import get_db
from repositories.user_repository import UserRepository

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):

    payload = decode_access_token(token)

    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido."
        )

    email = payload.get("email")

    repository = UserRepository(db)

    user = repository.get_by_email(email)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuário não encontrado."
        )

    return user