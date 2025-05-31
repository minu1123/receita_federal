import React from 'react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works" id="how">
      <h2>Como Funciona</h2>
      <div className="steps">
        <div className="step">
          <h3>🔋 1. Reaproveitamento da Bateria</h3>
          <p>Extraímos a bateria do vape ELF BAR BC4000 para reutilizá-la como fonte de energia portátil.</p>
        </div>
        <div className="step">
          <h3>⚡ 2. Controle de Carga com TP4056</h3>
          <p>Utilizamos um módulo TP4056 com proteção para gerenciar a recarga da bateria via painel solar ou USB.</p>
        </div>
        <div className="step">
          <h3>🔌 3. Conversão de Voltagem</h3>
          <p>Com o módulo Boost (MT3608), elevamos de 3.7V para 5V, permitindo carregar dispositivos USB.</p>
        </div>
        <div className="step">
          <h3>🌞 4. Energia Solar Opcional</h3>
          <p>Um pequeno painel solar recarrega o sistema em locais públicos sem depender de energia elétrica.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

