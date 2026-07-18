from enum import Enum

class StatusColaborador(str, Enum):
    ATIVO = "ativo"
    AFASTADO = "afastado"
    DESLIGADO = "desligado"