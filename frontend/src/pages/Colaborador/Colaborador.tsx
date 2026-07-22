import "./Colaborador.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import type { Colaborador } from "../../types/colaborador";
import { useNavigate } from "react-router-dom";

import {
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Building2,
    UserRound,
} from "lucide-react";

export default function Colaborador() {
    const { id } = useParams();
    const [colaborador, setColaborador] = useState<Colaborador | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function carregar() {
            const response = await api.get(`/colaboradores/${id}`);
            setColaborador(response.data);
        }

        carregar();
    }, [id]);

    if (!colaborador) {
        return <h2>Carregando...</h2>;
    }

    return (
        <div className="colaborador-page">
            <button 
                className="back-button"
                onClick={() => navigate("/colaboradores")}
            >
                ← Voltar para colaboradores
            </button>

            <section className="colaborador-header">
                <div className="colaborador-banner"></div>
                <div className="colaborador-content">
                    <div className="colaborador-info">
                        <div className="avatar">
                            {colaborador.nome
                                .split(" ")
                                .slice(0, 2)
                                .map(nome => nome[0])
                                .join("")}
                        </div>

                        <div className="info">
                            <h1>{colaborador.nome}</h1>
                            <p className="subtitulo">
                                Matrícula: {colaborador.matricula} • {colaborador.setor}
                            </p>

                            <span className="status">
                                {colaborador.status}
                            </span>
                        </div>
                    </div>

                    <button className="editar-btn">
                        Editar
                    </button>
                </div>
            </section>

            <div className="info-grid">
                <div className="info-card">
                    <div className="icon-box">
                        <Mail size={18} />
                    </div>
                    <div>
                        <small>E-mail</small>
                        <strong>{colaborador.email}</strong>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon-box">
                        <Phone size={18} />
                    </div>
                    <div>
                        <small>Telefone</small>
                        <strong>{colaborador.telefone || "-"}</strong>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon-box">
                        <MapPin size={18} />
                    </div>
                    <div>
                        <small>Cidade</small>
                        <strong>{colaborador.cidade}</strong>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon-box">
                        <Briefcase size={18} />
                    </div>
                    <div>
                        <small>Cargo</small>
                        <strong>{colaborador.cargo}</strong>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon-box">
                        <Building2 size={18} />
                    </div>
                    <div>
                        <small>Setor</small>
                        <strong>{colaborador.setor}</strong>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon-box">
                        <UserRound size={18} />
                    </div>
                    <div>
                        <small>Gestor</small>
                        <strong>{colaborador.gestor_nome ?? "-"}</strong>
                    </div>
                </div>
            </div>

            <section className="observacoes">
                <h3>Observações</h3>

                <p>
                    <strong>Folga:</strong> {colaborador.dia_folga || "-"} |
                    <strong> Mora:</strong> {colaborador.cidade} |
                    <strong> Observações:</strong> {colaborador.observacoes || "Nenhuma"}
                </p>
            </section>

            <section className="timeline">
                <h3>Linha do Tempo</h3>

                <div className="sem-eventos">
                    Nenhum evento registrado
                </div>
            </section>

        </div>
    );
}