from sqlalchemy.orm import Session
from app.models.colaborador import Colaborador

class RelatorioRepository:
    def get_colaboradores(
        self,
        db: Session,
    ):

        return (
            db.query(
                Colaborador
            )
            .order_by(
                Colaborador.nome
            )
            .all()
        )

relatorio_repository = RelatorioRepository()