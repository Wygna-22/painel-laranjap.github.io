import "./IndicadorModal.css";
import { useState } from "react";
import {
    X,
    Calendar,
    Users,
    Target,
    BarChart3,
    UserRound,
} from "lucide-react";

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

            <div className="indicador-modal">

                <form onSubmit={handleSubmit}>

                    <div className="indicador-modal-header">

                        <div>

                            <h2>Novo Indicador</h2>

                            <p>Cadastre os indicadores mensais.</p>

                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                        >
                            <X size={22} />
                        </button>

                    </div>

                    <div className="indicador-form-grid">
                        <div className="indicador-input-group full-width">

                            <label>
                                <UserRound size={16}/>
                                Usuário (ID)
                            </label>

                            <input
                                type="text"
                                placeholder="UUID do gestor"
                                value={form.user_id}
                                onChange={(e)=>
                                    handleChange(
                                        "user_id",
                                        e.target.value,
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>
                                <Calendar size={16}/>
                                Mês
                            </label>

                            <input
                                type="number"
                                value={form.mes}
                                onChange={(e)=>
                                    handleChange(
                                        "mes",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>
                                <Calendar size={16}/>
                                Ano
                            </label>

                            <input
                                type="number"
                                value={form.ano}
                                onChange={(e)=>
                                    handleChange(
                                        "ano",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>
                                <Users size={16}/>
                                Pessoas
                            </label>

                            <input
                                type="number"
                                value={form.qtd_pessoas}
                                onChange={(e)=>
                                    handleChange(
                                        "qtd_pessoas",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>
                                <BarChart3 size={16}/>
                                PPC
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.ppc}
                                onChange={(e)=>
                                    handleChange(
                                        "ppc",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>
                                ⭐ Pontos
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.pontos}
                                onChange={(e)=>
                                    handleChange(
                                        "pontos",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>
                                <Target size={16}/>
                                Meta PPC
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.meta_ppc}
                                onChange={(e)=>
                                    handleChange(
                                        "meta_ppc",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>
                                <Target size={16}/>
                                Meta do Mês
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.meta_mes}
                                onChange={(e)=>
                                    handleChange(
                                        "meta_mes",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>
                                <BarChart3 size={16}/>
                                Esperado Atual
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.esperado_atual}
                                onChange={(e)=>
                                    handleChange(
                                        "esperado_atual",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>Dias Atual</label>

                            <input
                                type="number"
                                value={form.dias_atual}
                                onChange={(e)=>
                                    handleChange(
                                        "dias_atual",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>Dias do Mês</label>

                            <input
                                type="number"
                                value={form.dias_mes}
                                onChange={(e)=>
                                    handleChange(
                                        "dias_mes",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>Falta Meta Dia</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.falta_meta_dia}
                                onChange={(e)=>
                                    handleChange(
                                        "falta_meta_dia",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                        <div className="indicador-input-group">

                            <label>Falta Meta Mês</label>

                            <input
                                type="number"
                                step="0.01"
                                value={form.falta_meta_mes}
                                onChange={(e)=>
                                    handleChange(
                                        "falta_meta_mes",
                                        Number(e.target.value),
                                    )
                                }
                            />

                        </div>

                    </div>

                    <div className="indicador-modal-footer">
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