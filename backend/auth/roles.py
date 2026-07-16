from enum import Enum

class Role(str, Enum):
    DEV = "dev"
    COORDENADOR = "coordenador"
    GESTOR = "gestor"