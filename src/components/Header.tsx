import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container">
      <a href="#inicio"><div className="logo">Enervape</div></a>  
        <nav className="nav-links">
          <a href="#mission">Missão</a>
          <a href="#about">Sobre</a>
          <a href="#usecases">Casos de uso</a>
          <a href="#footer">Enervape</a>
        </nav>
        <a href="#contato" className="header-button">Fale Conosco</a>
      </div>
    </header>
  );
};

export default Header;
