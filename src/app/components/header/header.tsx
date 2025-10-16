"use client";// Indica que este componente é um componente cliente no Next.js
import { useState } from "react";// Importa o hook useState do React
import NavItem, { NavItemInterface } from "../navitems";// Importa o componente NavItem e sua interface
import "./header.css";// Importa o arquivo CSS para estilização
import { FaBars, FaXmark} from "react-icons/fa6"; // Importa ícones do FontAwesome

/** Hook customizado simples que encapsula useState do React */
function useToggle(initial = false) {
  const [state, setState] = useState<boolean>(initial);
  const toggle = (value?: boolean) => {
    setState(prev => (typeof value === "boolean" ? value : !prev));
  };
  return [state, toggle] as const;
}

// Componente Header que representa o cabeçalho da aplicação
export default function Header() {
  const items: NavItemInterface[] = [
    { url: "/", label: "Home" },
    { url: "/projetos", label: "Projetos" },
  ];
// Array de itens de navegação
  const [openMenu, toggleMenu] = useToggle(false);// Estado para controlar o menu mobile

  // Retorna o JSX do componente
  return (
    <header>
      <nav className="navbar">
        <a href="/">
          <img src="/logo.png" width={110} height={40} alt="Logo" />
        </a>

        <ul className={`nav-items ${openMenu ? "open" : ""}`}>
          {items.map((item, index) => (
            <NavItem key={index} url={item.url} label={item.label} />
          ))}
        </ul>

        <button // Botão para abrir/fechar o menu mobile
          className="btn-mobile"
          aria-label="Abrir menu"
          onClick={() => toggleMenu()}
        >
          {openMenu ? <FaXmark /> : <FaBars />}
        </button>

        <button className="btn-default">Entrar</button> {/* Botão de ação padrão */}
      </nav>
    </header>
  );
}
//configurado para ser um componente cliente no Next.js
