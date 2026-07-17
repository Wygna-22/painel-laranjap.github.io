from fastapi import FastAPI

app = FastAPI(
    title="Painel Laranja API",
    version="1.0.0",
    description="API do sistema Painel Laranja",
)

@app.get("/")
def root():
    return {
        "mensagem": "🍊 Painel Laranja API está funcionando!"
    }