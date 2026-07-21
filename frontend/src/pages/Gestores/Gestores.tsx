import "./Gestores.css";

import { useEffect, useState } from "react";

import GestorCard from "../../components/GestorCard/GestorCard";

import { listarGestores } from "../../services/gestorService";

import type { Gestor } from "../../types/gestor";

export default function Gestores() {

    const [gestores, setGestores] = useState<Gestor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function carregar() {

            try {

                const dados = await listarGestores();

                setGestores(dados);

            } catch (erro) {

                console.error("Erro ao carregar gestores:", erro);

            } finally {

                setLoading(false);

            }

        }

        carregar();

    }, []);

    if (loading) {
        return <p>Carregando gestores...</p>;
    }

    return (

        <div className="gestores-page">

            <div className="page-title">

                <h1>Gestores</h1>

                <p>Gestão de usuários com perfil Gestor</p>

            </div>

            <div className="gestores-grid">

                {gestores.map((gestor) => (

                    <GestorCard
                        key={gestor.id}
                        gestor={gestor}
                    />

                ))}

            </div>

        </div>

    );

}