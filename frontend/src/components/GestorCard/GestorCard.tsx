import "./GestorCard.css";

import { Mail, CircleCheck, CircleX } from "lucide-react";

import type { Gestor } from "../../types/gestor";

interface Props {
    gestor: Gestor;
}

export default function GestorCard({ gestor }: Props) {
    return (
        <div className="gestor-card">

            <div className="gestor-header">

                <div className="gestor-avatar">
                    {gestor.nome.substring(0, 2).toUpperCase()}
                </div>

                <div>

                    <h3>{gestor.nome}</h3>

                    <p className="gestor-email">

                        <Mail size={16} />

                        {gestor.email}

                    </p>

                </div>

            </div>

            <hr />

            <div
                className={`gestor-status ${
                    gestor.ativo ? "ativo" : "inativo"
                }`}
            >
                {gestor.ativo ? (
                    <>
                        <CircleCheck size={16} />
                        Ativo
                    </>
                ) : (
                    <>
                        <CircleX size={16} />
                        Inativo
                    </>
                )}
            </div>

        </div>
    );
}