from sqlalchemy.orm import Session
from app.repositories.dashboard_repository import (
    dashboard_repository,
)

class DashboardService:

    def get_dashboard(
        self,
        db: Session,
    ):
        cards = dashboard_repository.get_cards(db)
        dashboard = {
            **cards,
            "por_setor":
                dashboard_repository.get_colaboradores_por_setor(db),

            "por_cidade":
                dashboard_repository.get_colaboradores_por_cidade(db),

            "ferias_mes":
                dashboard_repository.get_ferias_mes(db),

            "ferias_hoje":
                dashboard_repository.get_ferias_hoje(db),

            "folgas_hoje":
                dashboard_repository.get_folgas_hoje(db),

            "folgas_pendentes":
                dashboard_repository.get_folgas_pendentes(db),

            "elogios":
                dashboard_repository.get_total_elogios(db),

            "feedbacks":
                dashboard_repository.get_total_feedbacks(db),

            "treinamentos":
                dashboard_repository.get_total_treinamentos(db),

            "advertencias":
                dashboard_repository.get_total_advertencias(db),

            "ultimos_eventos":
                dashboard_repository.get_ultimos_historicos(db),
        }
        return dashboard
    
dashboard_service = DashboardService()