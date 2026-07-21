import "./Header.css";

import {
    Search,
    Bell,
    SlidersHorizontal,
    CircleUserRound,
} from "lucide-react";

export default function Header() {
    return (
        <header className="header">

            <h2>Painel Laranja</h2>

            <div className="header-right">

                <div className="search">

                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Pesquisar..."
                    />

                </div>

                <button className="header-icon">
                    <Bell size={20} />
                </button>

                <button className="header-icon">
                    <SlidersHorizontal size={20} />
                </button>

                <button className="header-avatar">
                    <CircleUserRound size={24} />
                </button>

            </div>

        </header>
    );
}