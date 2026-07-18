from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.gestor import (
    GestorCreate,
    GestorUpdate,
    GestorResponse,
)
from app.services.gestor_service import gestor_service

router = APIRouter(
    prefix="/gestores",
    tags=["Gestores"],
)

@router.get(
    "/",
    response_model=list[GestorResponse],
)
def listar_gestores(
    db: Session = Depends(get_db),
):
    return gestor_service.get_all(db)

@router.get(
    "/{gestor_id}",
    response_model=GestorResponse,
)
def buscar_gestor(
    gestor_id: UUID,
    db: Session = Depends(get_db),
):
    gestor = gestor_service.get_by_id(
        db,
        gestor_id,
    )

    if not gestor:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Gestor não encontrado.",
        )

    return gestor

@router.post(
    "/",
    response_model=GestorResponse,
    status_code=status.HTTP_201_CREATED,
)
def criar_gestor(
    gestor: GestorCreate,
    db: Session = Depends(get_db),
):
    return gestor_service.create(
        db,
        gestor,
    )

@router.put(
    "/{gestor_id}",
    response_model=GestorResponse,
)
def atualizar_gestor(
    gestor_id: UUID,
    gestor: GestorUpdate,
    db: Session = Depends(get_db),
):
    gestor_atualizado = gestor_service.update(
        db,
        gestor_id,
        gestor,
    )

    if not gestor_atualizado:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Gestor não encontrado.",
        )

    return gestor_atualizado

@router.delete(
    "/{gestor_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def deletar_gestor(
    gestor_id: UUID,
    db: Session = Depends(get_db),
):
    deletado = gestor_service.delete(
        db,
        gestor_id,
    )

    if not deletado:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Gestor não encontrado.",
        )