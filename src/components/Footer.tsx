import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Enervape Charger</h3>
          <p>Transformando lixo eletrônico em energia sustentável para todos.</p>
        </div>
        <div className="footer-links">
          <a href="#mission">Missão</a>
          <a href="#about">Projeto</a>
          <a href="#usecases">Casos de Uso</a>
          <a href="#contato">Contato</a>
        </div>
      </div>

      {/* Seção de Membros */}
      <div className="footer-members">
        <p><strong>Equipe:</strong> Micael Costa, Miszael Costa, Rafael Costa e Willian Bizzero</p>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Enervape – Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
