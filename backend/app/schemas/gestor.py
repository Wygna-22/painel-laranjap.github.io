from uuid import UUID
from pydantic import BaseModel, ConfigDict, EmailStr

class GestorCreate(BaseModel):
    nome: str
    email: EmailStr
    senha: str

class GestorUpdate(BaseModel):
    nome: str | None = None
    email: EmailStr | None = None
    senha: str | None = None
    ativo: bool |None = None

class GestorResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: UUID
    nome: str
    email: EmailStr
    ativo: bool