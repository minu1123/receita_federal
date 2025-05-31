import React from 'react';
import './mission.css';

const Mission: React.FC = () => {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-container">
        <h2>Nossa Missão</h2>
        <p className="mission-intro">
          O Enervape Charger nasceu com o propósito de transformar resíduos em soluções.
          Nosso objetivo é reduzir o lixo eletrônico e ampliar o acesso à energia sustentável em locais públicos.
        </p>
        <div className="mission-cards">
          <div className="mission-card">
            <div className="mission-icon">♻️</div>
            <h3>Sustentabilidade</h3>
            <p>Reaproveitamos baterias de vapes para evitar que se tornem lixo tóxico descartado de forma inadequada.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">🔋</div>
            <h3>Acesso à Energia</h3>
            <p>Levamos recarga de emergência a locais como pontos de ônibus, escolas e comunidades com infraestrutura limitada.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">🌍</div>
            <h3>Impacto Ambiental</h3>
            <p>Contribuímos diretamente para a economia circular e mitigação da poluição causada por dispositivos eletrônicos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
