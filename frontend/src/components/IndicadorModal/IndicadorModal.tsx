import "./IndicadorModal.css";
import { useState } from "react";

import type { IndicadorCreate } from "../../services/indicadorService";

interface Props {
    open: boolean;
    onClose: () => void;
    onSave: (data: IndicadorCreate) => Promise<void>;
}

export default function IndicadorModal({
    open,
    onClose,
    onSave,
}: Props) {

    const [form, setForm] = useState<IndicadorCreate>({
        user_id: "",

        mes: new Date().getMonth() + 1,
        ano: new Date().getFullYear(),

        qtd_pessoas: 0,

        dias_atual: 0,
        dias_mes: 0,

        pontos: 0,

        ppc: 0,
        meta_ppc: 0,

        falta_meta_dia: 0,

        meta_mes: 0,

        esperado_atual: 0,

        falta_meta_mes: 0,
    });

    if (!open) return null;

    function handleChange(
        field: keyof IndicadorCreate,
        value: string | number,
    ) {

        setForm((old) => ({
            ...old,
            [field]: value,
        }));

    }

    async function handleSubmit(
        e: React.FormEvent,
    ) {

        e.preventDefault();

        await onSave(form);

        onClose();

    }

    return (

        <div className="modal-overlay">

            <div className="modal">

                <div className="modal-header">

                    <h2>Novo Indicador</h2>

                    <button
                        type="button"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <label>Usuário (ID)</label>

                        <input
                            type="text"
                            placeholder="UUID do gestor"
                            value={form.user_id}
                            onChange={(e) =>
                                handleChange(
                                    "user_id",
                                    e.target.value,
                                )
                            }
                        />

                    </div>

                    <div className="row">

                        <div className="input-group">

                            <label>Mês</label>

                            <input
                                type="number"
                                value={form.mes}
                                onChange={(e) =>
                                    handleChange(
                                        "mes",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="input-group">

                            <label>Ano</label>

                            <input
                                type="number"
                                value={form.ano}
                                onChange={(e) =>
                                    handleChange(
                                        "ano",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                    </div>

                    <div className="row">

                        <div className="input-group">

                            <label>Quantidade de Pessoas</label>

                            <input
                                type="number"
                                value={form.qtd_pessoas}
                                onChange={(e) =>
                                    handleChange(
                                        "qtd_pessoas",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="input-group">

                            <label>PPC</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.ppc}
                                onChange={(e) =>
                                    handleChange(
                                        "ppc",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                    </div>

                    <div className="row">

                        <div className="input-group">

                            <label>Pontos</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.pontos}
                                onChange={(e) =>
                                    handleChange(
                                        "pontos",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="input-group">

                            <label>Meta do Mês</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.meta_mes}
                                onChange={(e) =>
                                    handleChange(
                                        "meta_mes",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                    </div>

                    <div className="row">

                        <div className="input-group">

                            <label>Meta PPC</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.meta_ppc}
                                onChange={(e) =>
                                    handleChange(
                                        "meta_ppc",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="input-group">

                            <label>Esperado Atual</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.esperado_atual}
                                onChange={(e) =>
                                    handleChange(
                                        "esperado_atual",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                    </div>

                    <div className="row">

                        <div className="input-group">

                            <label>Dias Atual</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.dias_atual}
                                onChange={(e) =>
                                    handleChange(
                                        "dias_atual",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="input-group">

                            <label>Dias do Mês</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.dias_mes}
                                onChange={(e) =>
                                    handleChange(
                                        "dias_mes",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                    </div>

                    <div className="row">

                        <div className="input-group">

                            <label>Falta Meta Dia</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.falta_meta_dia}
                                onChange={(e) =>
                                    handleChange(
                                        "falta_meta_dia",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="input-group">

                            <label>Falta Meta Mês</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.falta_meta_mes}
                                onChange={(e) =>
                                    handleChange(
                                        "falta_meta_mes",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                    </div>

                    <div className="modal-footer">

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