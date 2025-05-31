import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">Enervape</div>
        <nav className="nav-links">
          <a href="#mission">Missão</a>
          <a href="#about">Sobre</a>
          <a href="#impact">Impacto</a>
          <a href="#testimonials">Depoimentos</a>
        </nav>
        <a href="#contato" className="header-button">Fale Conosco</a>
      </div>
    </header>
  );
};

export default Header;
