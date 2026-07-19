from sqlalchemy.orm import Session
from app.repositories.relatorio_repository import (
    relatorio_repository,
)

class RelatorioService:
    def get_colaboradores(
        self,
        db: Session,
    ):

        return relatorio_repository.get_colaboradores(db)

relatorio_service = RelatorioService()