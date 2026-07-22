import { useEffect, useState } from "react";
import type { Colaborador } from "../../types/colaborador";
import "./ColaboradorModal.css";

interface Props {
    open: boolean;
    onClose: () => void;
    onSave: (data: Omit<Colaborador, "id">) => Promise<void>;
    colaborador?: Colaborador | null;
}

const initialState: Omit<Colaborador, "id"> = {
    nome: "",
    matricula: "",
    email: "",
    telefone: "",
    cargo: "",
    setor: "",
    cidade: "",

    dia_folga: "",

    data_admissao: "",
    status: "ativo",
    foto_url: "",
    observacoes: "",
    gestor_id: null,
};

export default function ColaboradorModal({
    open,
    onClose,
    onSave,
    colaborador,
}: Props) {

    const [form, setForm] = useState(initialState);

    useEffect(() => {
        if (colaborador) {
            const { id, ...rest } = colaborador;
            setForm(rest);
        } else {
            setForm(initialState);
        }
    }, [colaborador]);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        await onSave(form);

        onClose();
    }

    if (!open) return null;

    return (
        <div className="modal-overlay">
            <div className="colaborador-modal">
                <form onSubmit={handleSubmit}>
                    <div className="colaborador-modal-header">
                        <div>
                            <h2>
                                {colaborador
                                    ? "Editar Colaborador"
                                    : "Novo Colaborador"}
                            </h2>

                            <p>
                                Cadastre ou atualize um colaborador.
                            </p>
                        </div>
                    </div>

                    <div className="colaborador-form-grid">

                        <div className="colaborador-input-group">
                            <label>Nome</label>
                            <input
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="colaborador-input-group">
                            <label>Matrícula</label>
                            <input
                                name="matricula"
                                value={form.matricula}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="colaborador-input-group">
                            <label>E-mail</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email ?? ""}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="colaborador-input-group">
                            <label>Telefone</label>
                            <input
                                name="telefone"
                                value={form.telefone ?? ""}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="colaborador-input-group">
                            <label>Cargo</label>
                            <input
                                name="cargo"
                                value={form.cargo}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="colaborador-input-group">
                            <label>Setor</label>
                            <input
                                name="setor"
                                value={form.setor}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="colaborador-input-group">
                            <label>Cidade</label>
                            <input
                                name="cidade"
                                value={form.cidade}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="colaborador-input-group">
                            <label>Data de Admissão</label>
                            <input
                                type="date"
                                name="data_admissao"
                                value={form.data_admissao}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="colaborador-input-group">
                            <label>Status</label>

                            <select
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                            >
                                <option value="ativo">Ativo</option>
                                <option value="afastado">Afastado</option>
                                <option value="desligado">Desligado</option>
                            </select>
                        </div>

                        <div className="colaborador-input-group">
                            <label>Dia da Folga</label>

                            <select
                                name="dia_folga"
                                value={form.dia_folga ?? ""}
                                onChange={handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="Segunda">Segunda-feira</option>
                                <option value="Terça">Terça-feira</option>
                                <option value="Quarta">Quarta-feira</option>
                                <option value="Quinta">Quinta-feira</option>
                                <option value="Sexta">Sexta-feira</option>
                                <option value="Sábado">Sábado</option>
                                <option value="Domingo">Domingo</option>
                            </select>
                        </div>

                        <div className="colaborador-input-group full-width">

                            <label>Observações</label>

                            <textarea
                                name="observacoes"
                                value={form.observacoes ?? ""}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    <div className="colaborador-modal-footer">

                        <button
                            type="button"
                            className="cancelar"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="salvar"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}