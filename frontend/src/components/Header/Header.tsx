import { Bell, Search, UserCircle2 } from "lucide-react";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <h2>
                    Painel Laranja
                </h2>
            </div>

            <div className="header-right">
                <div className="search">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                    />
                </div>

                <Bell size={22} className="icon"/>
                <UserCircle2 size={34} className="icon"/>
            </div>
        </header>
    );
}