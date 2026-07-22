export interface Colaborador {
    id: string;

    nome: string;
    matricula: string;

    email: string | null;
    telefone: string | null;

    cargo: string;
    setor: string;
    cidade: string;
    dia_folga: string | null;

    data_admissao: string;

    status: string;

    foto_url: string | null;
    observacoes: string | null;

    gestor_id: string | null;
    gestor_nome: string | null;
}