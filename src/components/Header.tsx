import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container">
        <a href="#inicio"><div className="logo">Enervape</div></a>

        {/* Checkbox invisível para controlar o menu */}
        <input type="checkbox" id="menu-toggle" />

        {/* Label que funciona como botão de hambúrguer */}
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>

        {/* Menu de navegação responsivo */}
        <nav className="nav-links">
          <a href="#mission">Missão</a>
          <a href="#about">Sobre</a>
          <a href="#usecases">Casos de uso</a>
          <a href="#footer">Enervape</a>
          <a href="#contato" className="header-button">Fale Conosco</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
