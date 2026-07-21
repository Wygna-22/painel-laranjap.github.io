import api from "./api";

const downloadArquivo = async (
    endpoint: string,
    nomeArquivo: string
) => {
    const response = await api.get(endpoint, {
        responseType: "blob",
    });

    const url = window.URL.createObjectURL(
        new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;
    link.download = nomeArquivo;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
};

export const relatorioService = {
    colaboradores: () =>
        downloadArquivo(
            "/reports/colaboradores",
            "colaboradores.xlsx"
        ),

    gestores: () =>
        downloadArquivo(
            "/reports/gestores",
            "gestores.xlsx"
        ),

    ferias: () =>
        downloadArquivo(
            "/reports/ferias",
            "ferias.xlsx"
        ),

    folgas: () =>
        downloadArquivo(
            "/reports/folgas",
            "folgas.xlsx"
        ),

    historico: () =>
        downloadArquivo(
            "/reports/historico",
            "historico.xlsx"
        ),
};