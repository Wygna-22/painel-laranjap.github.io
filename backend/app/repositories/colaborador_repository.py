from uuid import UUID
from sqlalchemy.orm import Session
from app.models.colaborador import Colaborador
from app.repositories.base import BaseRepository
from app.models.user import User

class ColaboradorRepository(BaseRepository[Colaborador]):

    def __init__(self):
        super().__init__(Colaborador)

    def get_by_matricula(
        self,
        db: Session,
        matricula: str,
    ) -> Colaborador | None:
        return (
            db.query(Colaborador)
            .filter(Colaborador.matricula == matricula)
            .first()
        )

    def get_by_email(
        self,
        db: Session,
        email: str,
    ) -> Colaborador | None:
        return (
            db.query(Colaborador)
            .filter(Colaborador.email == email)
            .first()
        )

    def get_by_gestor(
        self,
        db: Session,
        gestor_id: UUID,
    ) -> list[Colaborador]:
        return (
            db.query(Colaborador)
            .filter(Colaborador.gestor_id == gestor_id)
            .all()
        )
    
    def get_with_gestor(
        self,
        db: Session,
        colaborador_id: UUID,
    ):
        colaborador = (
            db.query(
                Colaborador,
                User.nome.label("gestor_nome"),
            )
            .outerjoin(
                User,
                Colaborador.gestor_id == User.id,
            )
            .filter(
                Colaborador.id == colaborador_id,
            )
            .first()
        )

        if not colaborador:
            return None

        colaborador, gestor_nome = colaborador

        return {
            **colaborador.__dict__,
            "gestor_nome": gestor_nome,
        }


    def get_all_with_gestor(
        self,
        db: Session,
    ):
        colaboradores = (
            db.query(
                Colaborador,
                User.nome.label("gestor_nome"),
            )
            .outerjoin(
                User,
                Colaborador.gestor_id == User.id,
            )
            .all()
        )

        return [
            {
                **colaborador.__dict__,
                "gestor_nome": gestor_nome,
            }
            for colaborador, gestor_nome in colaboradores
        ]

colaborador_repository = ColaboradorRepository()