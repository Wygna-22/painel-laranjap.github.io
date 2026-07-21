import "./Colaborador.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import type { Colaborador } from "../../types/colaborador";
import { useNavigate } from "react-router-dom";

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
        </div>
    );
}