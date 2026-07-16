from models.user import User
from repositories.user_repository import UserRepository
from schemas.user_schema import UserCreate
from auth.password import hash_password

class UserService:

    def __init__(self, repository: UserRepository):
        self.repository = repository

    def create_user(self, data: UserCreate) -> User:

        existing_user = self.repository.get_by_email(data.email)

        if existing_user:
            raise ValueError(
                "E-mail já cadastrado."
            )

        user = User(
            nome=data.nome,
            email=data.email,
            password_hash=hash_password(data.password),
            role="gestor"
        )

        return self.repository.create(user)