import { api } from "./api";
import type { Gestor } from "../types/gestor";

export async function listarGestores(): Promise<Gestor[]> {
    const { data } = await api.get<Gestor[]>("/gestores");
    return data;
}