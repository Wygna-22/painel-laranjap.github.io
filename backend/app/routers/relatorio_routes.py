from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.relatorio_service import (
    relatorio_service,
)

router = APIRouter(
    prefix="/relatorios",
    tags=["Relatórios"],
)

@router.get(
    "/colaboradores"
)
def colaboradores(
    db: Session = Depends(get_db),
):
    return relatorio_service.get_colaboradores(db)