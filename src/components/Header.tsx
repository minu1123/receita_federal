import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container">
        <a href="#inicio" className="logo">Enervape</a>

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>

        <div className="menu-wrapper">
          <nav className="nav-links">
            <a href="#mission">Missão</a>
            <a href="#about">Sobre</a>
            <a href="#usecases">Casos de uso</a>
            <a href="#footer">Enervape</a>
            <a href="#contato" className="header-button">Fale Conosco</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
