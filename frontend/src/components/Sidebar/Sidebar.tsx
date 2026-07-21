import {
    LayoutDashboard,
    Users,
    CalendarDays,
    CalendarCheck,
    FileBarChart2,
    UserCog,
    ClipboardList,
    Activity,
    LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-header">

                <div className="sidebar-logo">

                    <div
                        style={{
                            width: 52,
                            height: 52,
                            borderRadius: 14,
                            background: "#FF7A00",
                            color: "#FFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            fontSize: 26,
                            boxShadow: "0 10px 22px rgba(255,122,0,.25)",
                        }}
                    >
                        P
                    </div>

                    <div className="sidebar-brand">
                        <h2>Painel Laranja</h2>
                        <span>Gestão Corporativa</span>
                    </div>

                </div>

            </div>

            <nav className="sidebar-nav">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to="/colaboradores"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    <Users size={20} />
                    <span>Colaboradores</span>
                </NavLink>

                <NavLink
                    to="/gestores"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    <UserCog size={20} />
                    <span>Gestores</span>
                </NavLink>

                <NavLink
                    to="/ferias"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    <CalendarDays size={20} />
                    <span>Férias</span>
                </NavLink>

                <NavLink
                    to="/folgas"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    <CalendarCheck size={20} />
                    <span>Folgas</span>
                </NavLink>

                <NavLink
                    to="/indicadores"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    <Activity size={20} />
                    <span>Indicadores</span>
                </NavLink>

                <NavLink
                    to="/relatorios"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    <FileBarChart2 size={20} />
                    <span>Relatórios</span>
                </NavLink>

                <NavLink
                    to="/historico"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    <ClipboardList size={20} />
                    <span>Histórico</span>
                </NavLink>

            </nav>

            <div className="sidebar-footer">

                <div className="sidebar-version">

                    <small>Versão 1.0</small>

                    <strong>Painel Laranja</strong>

                </div>

                <NavLink
                    to="/login"
                    className="sidebar-item"
                    style={{ marginTop: 18 }}
                >
                    <LogOut size={20} />
                    <span>Sair</span>
                </NavLink>

            </div>

        </aside>
    );
}