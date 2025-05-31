import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container">
        <a href="#inicio" className="logo">Enervape</a>

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>

        <nav className="nav-links">
          <a href="#mission">Missão</a>
          <a href="#about">Sobre</a>
          <a href="#usecases">Casos de uso</a>
          <a href="#footer">Enervape</a>
          <a href="#contato" className="header-button mobile-only">Fale Conosco</a>
        </nav>

        <a href="#contato" className="header-button desktop-only">Fale Conosco</a>
      </div>
    </header>
  );
};

export default Header;
