import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>Sobre o Projeto</h2>
        <p className="about-intro">
          Saiba como o Enervape Charger funciona: do reaproveitamento à entrega de energia.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-number">1</div>
            <h3>Reaproveitamento da Bateria</h3>
            <p>
              Extraímos a bateria de vapes descartáveis (ex: ELF BAR BC4000), evitando descarte tóxico e dando um novo uso energético.
            </p>
          </div>
          <div className="about-card">
            <div className="card-number">2</div>
            <h3>Módulo TP4056</h3>
            <p>
              Utilizado para carregar a bateria com segurança via USB ou painel solar, com proteção contra sobrecarga e descarga.
            </p>
          </div>
          <div className="about-card">
            <div className="card-number">3</div>
            <h3>Conversor Boost 5V</h3>
            <p>
              Eleva a voltagem da bateria (3.7V) para 5V, permitindo alimentar entradas USB e carregar celulares com eficiência.
            </p>
          </div>
          <div className="about-card">
            <div className="card-number">4</div>
            <h3>Painel Solar Integrado</h3>
            <p>
              Pequeno painel solar recarrega automaticamente durante o dia, ideal para locais públicos, pontos de Ônibus ou acampamentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
