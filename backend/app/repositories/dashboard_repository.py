from datetime import date
from sqlalchemy import func
from sqlalchemy.orm import Session
from app.models.colaborador import Colaborador
from app.models.ferias import Ferias
from app.models.folga import Folga
from app.models.historico import Historico
from app.models.status_colaborador import StatusColaborador
from app.models.status_folga import StatusFolga
from app.models.tipo_historico import TipoHistorico

class DashboardRepository:

    def get_cards(self, db: Session):

        hoje = date.today()

        inicio_mes = date(
            hoje.year,
            hoje.month,
            1,
        )

        return {
            "total_colaboradores": db.query(
                Colaborador
            ).count(),

            "ativos": db.query(
                Colaborador
            ).filter(
                Colaborador.status == StatusColaborador.ATIVO
            ).count(),

            "afastados": db.query(
                Colaborador
            ).filter(
                Colaborador.status == StatusColaborador.AFASTADO
            ).count(),

            "desligados": db.query(
                Colaborador
            ).filter(
                Colaborador.status == StatusColaborador.DESLIGADO
            ).count(),

            "admissoes_mes": db.query(
                Colaborador
            ).filter(
                Colaborador.data_admissao >= inicio_mes
            ).count(),
        }

    def get_colaboradores_por_setor(
        self,
        db: Session,
    ):

        resultado = (
            db.query(
                Colaborador.setor,
                func.count(Colaborador.id),
            )
            .group_by(
                Colaborador.setor,
            )
            .all()
        )

        return [
            {
                "setor": setor,
                "quantidade": quantidade,
            }
            for setor, quantidade in resultado
        ]

    def get_colaboradores_por_cidade(
        self,
        db: Session,
    ):

        resultado = (
            db.query(
                Colaborador.cidade,
                func.count(Colaborador.id),
            )
            .group_by(
                Colaborador.cidade,
            )
            .all()
        )

        return [
            {
                "cidade": cidade,
                "quantidade": quantidade,
            }
            for cidade, quantidade in resultado
        ]

    def get_ferias_mes(
        self,
        db: Session,
    ):

        hoje = date.today()

        return (
            db.query(Ferias)
            .filter(
                func.extract(
                    "month",
                    Ferias.data_inicio,
                ) == hoje.month,
                func.extract(
                    "year",
                    Ferias.data_inicio,
                ) == hoje.year,
            )
            .count()
        )

    def get_ferias_hoje(
        self,
        db: Session,
    ):

        hoje = date.today()

        return (
            db.query(Ferias)
            .filter(
                Ferias.data_inicio <= hoje,
                Ferias.data_fim >= hoje,
            )
            .count()
        )

    def get_folgas_hoje(
        self,
        db: Session,
    ):

        return (
            db.query(Folga)
            .filter(
                Folga.data == date.today(),
                Folga.status == StatusFolga.APROVADA,
            )
            .count()
        )

    def get_folgas_pendentes(
        self,
        db: Session,
    ):

        return (
            db.query(Folga)
            .filter(
                Folga.status == StatusFolga.PENDENTE,
            )
            .count()
        )

    def get_total_elogios(
        self,
        db: Session,
    ):

        return (
            db.query(Historico)
            .filter(
                Historico.tipo == TipoHistorico.ELOGIO,
            )
            .count()
        )

    def get_total_feedbacks(
        self,
        db: Session,
    ):

        return (
            db.query(Historico)
            .filter(
                Historico.tipo == TipoHistorico.FEEDBACK,
            )
            .count()
        )

    def get_total_treinamentos(
        self,
        db: Session,
    ):

        return (
            db.query(Historico)
            .filter(
                Historico.tipo == TipoHistorico.TREINAMENTO,
            )
            .count()
        )
    def get_total_advertencias(
        self,
        db: Session,
    ):
        return (
            db.query(Historico)
            .filter(
                Historico.tipo == TipoHistorico.ADVERTENCIA,
            )
            .count()
        )

    def get_ultimos_historicos(
        self,
        db: Session,
    ):

        historicos = (
            db.query(
                Historico,
                Colaborador.nome,
            )
            .join(
                Colaborador,
                Historico.colaborador_id == Colaborador.id,
            )
            .order_by(
                Historico.data.desc(),
            )
            .limit(5)
            .all()
        )

        return [
            {
                "colaborador": nome,
                "tipo": historico.tipo.value,
                "titulo": historico.titulo,
                "data": historico.data,
            }
            for historico, nome in historicos
        ]
    
dashboard_repository = DashboardRepository()