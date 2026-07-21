import { useCallback, useEffect, useState } from "react";
import {
    getIndicadores,
    createIndicador as create,
    updateIndicador as update,
    deleteIndicador as remove,
} from "../services/indicadorService";

import type {
    Indicador,
    IndicadorCreate,
} from "../services/indicadorService";
export function useIndicadores() {
    const [indicadores, setIndicadores] = useState<Indicador[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const refresh = useCallback(async () => {

        try {
            setLoading(true);
            const data = await getIndicadores();
            setIndicadores(data);
            setError(null);
        } catch {
            setError("Erro ao carregar indicadores.");
        } finally {
            setLoading(false);
        }

    }, []);

    useEffect(() => {
        refresh();
    }, [refresh]);

    async function createIndicador(
        data: IndicadorCreate,
    ) {
        await create(data);
        await refresh();
    }

    async function updateIndicador(
        id: string,
        data: Partial<IndicadorCreate>,
    ) {
        await update(id, data);
        await refresh();
    }

    async function deleteIndicador(
        id: string,
    ) {
        await remove(id);
        await refresh();
    }

    return {
        indicadores,
        loading,
        error,
        refresh,
        createIndicador,
        updateIndicador,
        deleteIndicador,
    };
}