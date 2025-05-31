import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Enervape Charger</h3>
          <p>Transformando lixo eletrônico em energia sustentável para todos.</p>
        </div>

        {/* Links rápidos */}
        <div className="footer-links">
          <a href="#mission">Missão</a>
          <a href="#about">Projeto</a>
          <a href="#usecases">Casos de Uso</a>
          <a href="#contato">Contato</a>
        </div>

        {/* Mini formulário de contato */}
        <div className="footer-form" id="contato">
          <h4>Entre em contato</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu e-mail" required />
            <textarea placeholder="Sua mensagem" rows={3} required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

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
