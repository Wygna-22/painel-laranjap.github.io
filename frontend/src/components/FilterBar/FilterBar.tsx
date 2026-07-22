import "./FilterBar.css";

import {
    Search,
    MapPin,
    UserRound,
    BadgeCheck,
    X,
} from "lucide-react";

interface Props {
    search: string;
    cidade: string;
    gestor: string;
    status: string;

    cidades: string[];
    gestores: string[];

    onSearchChange: (value: string) => void;
    onCidadeChange: (value: string) => void;
    onGestorChange: (value: string) => void;
    onStatusChange: (value: string) => void;

    onClear: () => void;
}

export default function FilterBar({
    search,
    cidade,
    gestor,
    status,
    cidades,
    gestores,
    onSearchChange,
    onCidadeChange,
    onGestorChange,
    onStatusChange,
    onClear,
}: Props) {
    return (
        <div className="filter-bar">

            <div className="search-box">
                <Search size={18} />
                <input
                    type="text"
                    placeholder="Nome, matrícula ou e-mail..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="filters">

                <div className="filter-item">
                    <MapPin size={18} />
                    <select
                        value={cidade}
                        onChange={(e) => onCidadeChange(e.target.value)}
                    >
                        <option value="">Todas</option>

                        {cidades.map((cidade) => (
                            <option
                                key={cidade}
                                value={cidade}
                            >
                                {cidade}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-item">
                    <UserRound size={18} />
                    <select
                        value={gestor}
                        onChange={(e) => onGestorChange(e.target.value)}
                    >
                        <option value="">Todos</option>

                        {gestores.map((gestor) => (
                            <option
                                key={gestor}
                                value={gestor}
                            >
                                {gestor}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-item">
                    <BadgeCheck size={18} />

                    <select
                        value={status}
                        onChange={(e) => onStatusChange(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="ATIVO">Ativo</option>
                        <option value="FERIAS">Férias</option>
                        <option value="INATIVO">Inativo</option>
                    </select>
                </div>

                <button
                    className="clear-btn"
                    onClick={onClear}
                >
                    <X size={16} />
                    Limpar
                </button>

            </div>

        </div>
    );
}