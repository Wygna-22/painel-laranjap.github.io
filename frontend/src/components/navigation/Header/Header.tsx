import { Search, Bell, CircleUserRound } from "lucide-react";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="header__search">

        <Search size={18}/>

        <input
          placeholder="Pesquisar colaborador..."
        />

      </div>

      <div className="header__right">

        <Bell size={20}/>

        <CircleUserRound size={28}/>

        <span>Wygna Vitória</span>

      </div>

    </header>
  );
}