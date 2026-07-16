from models.user import User
from repositories.user_repository import UserRepository
from schemas.user_schema import UserCreate, UserLogin
from auth.password import hash_password
from auth.jwt_handler import create_access_token
from auth.password import verify_password
from fastapi import HTTPException, status

class UserService:

    def __init__(self, repository: UserRepository):
        self.repository = repository

    def create_user(self, data: UserCreate) -> User:

        existing_user = self.repository.get_by_email(data.email)

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="E-mail já cadastrado."
            )

        user = User(
            nome=data.nome,
            email=data.email,
            password_hash=hash_password(data.password),
            role="gestor"
        )

        return self.repository.create(user)
    
    def login(self, data: UserLogin):
        user = self.repository.get_by_email(data.email)

        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="E-mail ou senha inválidos."
            )

        if not verify_password(
            data.password,
            user.password_hash
        ):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="E-mail ou senha inválidos."
            )

        token = create_access_token(
            {
                "sub": str(user.id),
                "email": user.email,
                "role": user.role
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer"
        }
    
    def get_all_users(self):
        return self.repository.get_all()