from datetime import date
from pydantic import BaseModel

class QuantidadeSetor(BaseModel):
    setor: str
    quantidade: int

class QuantidadeCidade(BaseModel):
    cidade: str
    quantidade: int

class UltimoEvento(BaseModel):
    colaborador: str
    tipo: str
    titulo: str
    data: date

class DashboardResponse(BaseModel):
    total_colaboradores: int
    ativos: int
    afastados: int
    desligados: int
    admissoes_mes: int

    ferias_mes: int
    ferias_hoje: int

    folgas_hoje: int
    folgas_pendentes: int

    elogios: int
    feedbacks: int
    treinamentos: int
    advertencias: int

    por_setor: list[QuantidadeSetor]
    por_cidade: list[QuantidadeCidade]

    ultimos_eventos: list[UltimoEvento]