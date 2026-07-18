import uuid
from datetime import date

from sqlalchemy import Boolean, Date, ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Enum as SqlEnum, Text

from app.core.database import Base
from app.models.base import TimestampMixin
from app.models.user import User
from app.models.status_colaborador import StatusColaborador

class Colaborador(TimestampMixin, Base):
    __tablename__ = "colaboradores"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    nome: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    matricula: Mapped[str] = mapped_column(
        String(30),
        unique=True,
        nullable=False,
        index=True,
    )

    email: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    telefone: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    cargo: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    setor: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    cidade: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    data_admissao: Mapped[date] = mapped_column(
        Date,
        nullable=False,
    )

    status: Mapped[StatusColaborador] = mapped_column(
        SqlEnum(
            StatusColaborador,
            name="status_colaborador",
        ),
        default=StatusColaborador.ATIVO,
        nullable=False,
    )

    foto_url: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    observacoes: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    gestor_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id"),
        nullable=True,
    )

    gestor: Mapped[User | None] = relationship()