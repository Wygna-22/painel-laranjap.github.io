import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Colaboradores from "../pages/Colaboradores/Colaboradores";
import Ferias from "../pages/Ferias/Ferias";
import Folgas from "../pages/Folgas/Folgas";
import Relatorios from "../pages/Relatorios/Relatorios";
import Login from "../pages/Login/Login";
export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route element={<MainLayout />}>

                    <Route
                        index
                        element={<Dashboard />}
                    />

                    <Route
                        path="/colaboradores"
                        element={<Colaboradores />}
                    />

                    <Route
                        path="/ferias"
                        element={<Ferias />}
                    />

                    <Route
                        path="/folgas"
                        element={<Folgas />}
                    />

                    <Route
                        path="/relatorios"
                        element={<Relatorios />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}