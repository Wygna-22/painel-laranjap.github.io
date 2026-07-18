from sqlalchemy.orm import Session

from app.models.enums import UserRole
from app.models.user import User
from app.repositories.base import BaseRepository

class GestorRepository(BaseRepository[User]):

    def __init__(self):
        super().__init__(User)

    def get_all(self, db: Session):
        return (
            db.query(User)
            .filter(User.perfil == UserRole.GESTOR)
            .all()
        )

    def get(self, db: Session, id):
        return (
            db.query(User)
            .filter(
                User.id == id,
                User.perfil == UserRole.GESTOR,
            )
            .first()
        )

    def get_by_email(
        self,
        db: Session,
        email: str,
    ):
        return (
            db.query(User)
            .filter(
                User.email == email,
                User.perfil == UserRole.GESTOR,
            )
            .first()
        )


gestor_repository = GestorRepository()