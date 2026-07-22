import "./Colaboradores.css";
import { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { useColaboradores } from "../../hooks/useColaboradores";
import type { Colaborador } from "../../types/colaborador";
import ColaboradorModal from "../../components/ColaboradorModal/ColaboradorModal";
import { useNavigate } from "react-router-dom";

export default function Colaboradores() {

    const {
        colaboradores,
        loading,
        error,
        create,
        update,
        remove,
    } = useColaboradores();

    const [pesquisa, setPesquisa] = useState("");
    const [gestorFiltro, setGestorFiltro] = useState("todos");
    const [statusFiltro, setStatusFiltro] = useState("todos");
    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState<Colaborador | null>(null);

    const navigate = useNavigate();

    const DIAS_SEMANA = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ];

    const hoje = DIAS_SEMANA[new Date().getDay()];

    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
        const busca =
            colaborador.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
            (colaborador.email ?? "").toLowerCase().includes(pesquisa.toLowerCase()) ||
            colaborador.setor.toLowerCase().includes(pesquisa.toLowerCase()) ||
            colaborador.cidade.toLowerCase().includes(pesquisa.toLowerCase());

        const gestor =
            gestorFiltro === "todos" ||
            colaborador.gestor_nome === gestorFiltro;

        const status =
            statusFiltro === "todos" ||
            colaborador.status.toLowerCase() === statusFiltro;

        return busca && gestor && status;

    });

    const gestores = [
        "todos",
        ...new Set(
            colaboradores
                .map(c => c.gestor_nome)
                .filter((g): g is string => g !== null)
        )
    ];

    if (loading) {
        return <h2>Carregando colaboradores...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (

        <div className="colaboradores-page">

            <div className="page-header">

                <h1>Colaboradores</h1>

                <button
                    className="novo-btn"
                    onClick={() => {
                        setSelected(null);
                        setModalOpen(true);
                    }}
                >
                    <Plus size={18} />
                    Novo Colaborador
                </button>

            </div>

            <div className="pesquisa">

                <Search size={18} />

                <input
                    placeholder="Pesquisar..."
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                />

            </div>

            <div className="filters">
                <select
                    className="filter-select"
                    value={gestorFiltro}
                    onChange={(e) => setGestorFiltro(e.target.value)}
                >
                    <option value="todos">
                        Todos os gestores
                    </option>

                    {gestores.map((gestor) => (

                        gestor !== "todos" && (

                            <option
                                key={gestor}
                                value={gestor}
                            >
                                {gestor}
                            </option>

                        )

                    ))}

                </select>

                <select
                    className="filter-select"
                    value={statusFiltro}
                    onChange={(e) => setStatusFiltro(e.target.value)}
                >
                    <option value="todos">
                        Todos os status
                    </option>

                    <option value="ativo">
                        Ativo
                    </option>

                    <option value="inativo">
                        Inativo
                    </option>

                </select>

            </div>
            
            <div className="tabela-container">
                <table className="tabela">
                    <thead>
                        <tr>
                            <th>Nome</th>

                            <th>Email</th>

                            <th>Matrícula</th>

                            <th>Cargo</th>

                            <th>Setor</th>

                            <th>Cidade</th>

                            <th>Status</th>

                            <th>Folga</th>

                            <th>Ações</th>

                        </tr>

                    </thead>

                    <tbody>

                        {colaboradoresFiltrados.map((colaborador) => {

                            const folgaHoje =
                                (colaborador.dia_folga ?? "").trim() === hoje;

                            return (

                                <tr
                                    key={colaborador.id}
                                    className={folgaHoje ? "linha-folga" : ""}
                                >

                                    <td>

                                        <button
                                            className="nome-colaborador"
                                            onClick={() =>
                                                navigate(`/colaboradores/${colaborador.id}`)
                                            }
                                        >
                                            {colaborador.nome}
                                        </button>

                                    </td>

                                    <td>{colaborador.email}</td>

                                    <td>{colaborador.matricula}</td>

                                    <td>{colaborador.cargo}</td>

                                    <td>{colaborador.setor}</td>

                                    <td>{colaborador.cidade}</td>

                                    <td>

                                        <span className="status-badge">
                                            {colaborador.status}
                                        </span>

                                    </td>

                                    <td>

                                        <span
                                            className={`folga-badge ${folgaHoje ? "hoje" : ""}`}
                                        >
                                            {colaborador.dia_folga || "-"}
                                        </span>

                                    </td>

                                    <td>
                                                                            <button
                                            className="icon-btn"
                                            onClick={() => {
                                                setSelected(colaborador);
                                                setModalOpen(true);
                                            }}
                                        >
                                            <Pencil size={18} />
                                        </button>

                                        <button
                                            className="icon-btn delete"
                                            onClick={async () => {

                                                if (
                                                    window.confirm(
                                                        `Excluir ${colaborador.nome}?`
                                                    )
                                                ) {

                                                    await remove(colaborador.id);

                                                }

                                            }}
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                    </td>

                                </tr>

                            );

                        })}

                    </tbody>

                </table>
            </div>
            
            <ColaboradorModal
                open={modalOpen}
                colaborador={selected}
                onClose={() => setModalOpen(false)}
                onSave={async (data) => {

                    if (selected) {

                        await update(
                            selected.id,
                            data
                        );

                    } else {

                        await create(data);

                    }

                }}
            />
        </div>
    );
}