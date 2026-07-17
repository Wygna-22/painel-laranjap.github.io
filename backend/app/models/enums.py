from enum import Enum

class UserRole(str, Enum):
    ADMIN = "admin"
    GESTOR = "gestor"
    COLABORADOR = "colaborador"