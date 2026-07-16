from pydantic import BaseModel, EmailStr, ConfigDict
from uuid import UUID
from datetime import datetime

class UserCreate(BaseModel):
    nome: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: UUID
    nome: str
    email: EmailStr
    role: str
    is_active: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)