import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar__logo">

        🍊

        <span>Painel Laranja</span>

      </div>

      <nav>

        <a className="active">

          <LayoutDashboard size={20}/>

          Dashboard

        </a>

        <a>

          <Users size={20}/>

          Colaboradores

        </a>

        <a>

          <CalendarDays size={20}/>

          Férias

        </a>

        <a>

          <FileText size={20}/>

          Relatórios

        </a>

      </nav>

      <div className="sidebar__bottom">

        <a>

          <Settings size={20}/>

          Configurações

        </a>

        <a>

          <LogOut size={20}/>

          Sair

        </a>

      </div>

    </aside>
  );
}