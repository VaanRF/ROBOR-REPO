import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <h1>RoboRepô</h1>
        </Link>
      </div>
      <nav className="nav">
        <Link to="/">Início</Link>
        <Link to="/modulos">Módulos</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/busca">🔍 Buscar</Link>
      </nav>
    </header>
  );
}

export default Header;