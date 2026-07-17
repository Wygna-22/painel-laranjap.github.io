from fastapi import FastAPI
from app.routers.users import router as user_router
from app.routers.auth import router as auth_router

app = FastAPI(
    title="Painel Laranja API",
    version="1.0.0",
)

app.include_router(user_router)
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "🍊 Painel Laranja API"}