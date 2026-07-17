from passlib.context import CryptContext
from sqlalchemy.orm import Session
from app.models.user import User
from app.repositories.user import user_repository
from app.schemas.user import UserCreate

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserService:
    def create_user(self, db: Session, user: UserCreate) -> User:
        # Verifica se o e-mail já existe
        existing_user = user_repository.get_by_email(db, user.email)

        if existing_user:
            raise ValueError("Já existe um usuário com este e-mail.")

        # Criptografa a senha
        senha_hash = pwd_context.hash(user.senha)

        # Cria o objeto
        novo_usuario = User(
            nome=user.nome,
            email=user.email,
            senha_hash=senha_hash,
            perfil=user.perfil,
        )

        return user_repository.create(db, novo_usuario)

    def authenticate(self, db: Session, email: str, senha: str):
        usuario = user_repository.get_by_email(db, email)

        if not usuario:
            return None

        if not pwd_context.verify(senha, usuario.senha_hash):
            return None

        return usuario

user_service = UserService()