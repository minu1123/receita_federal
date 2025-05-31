import React from 'react';
import './Hero.css';
import vapeImg from '../assets/vape.png'; // ajuste para o nome real do arquivo

const Hero: React.FC = () => {
  return (
    <section className="hero-modern" id ="inicio">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Transformando Vapes em Energia Sustentável
          </h1>
          <p>
            Uma solução ecológica e inovadora que reutiliza dispositivos eletrônicos descartáveis como carregadores solares de emergência.
          </p>
          <a href="#mission" className="hero-cta">Ver Missão</a>
        </div>
        <div className="hero-image">
          <img src={vapeImg} alt="Vape roxo transformado em carregador solar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
