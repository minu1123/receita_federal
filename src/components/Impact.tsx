import React from 'react';
import './Impact.css';

const Impact: React.FC = () => {
  return (
    <section className="impact" id="impact">
      <h2>Impacto Social e Ambiental</h2>
      <div className="impact-cards">
        <div className="card">
          <h3>♻️ Redução do Lixo Eletrônico</h3>
          <p>Cada carregador SolarVape reutiliza uma bateria de vape que iria para o lixo, diminuindo o impacto ambiental.</p>
        </div>
        <div className="card">
          <h3>⚙️ Reutilização de Componentes</h3>
          <p>Transformamos vapes descartados em fontes de energia úteis e seguras para a sociedade.</p>
        </div>
        <div className="card">
          <h3>🌍 Energia Limpa e Sustentável</h3>
          <p>O uso de painéis solares permite recarga sem depender da rede elétrica, promovendo a sustentabilidade urbana.</p>
        </div>
        <div className="card">
          <h3>📱 Acesso à Energia em Emergências</h3>
          <p>Em locais públicos como pontos de ônibus, o dispositivo permite carregar celulares em casos de emergência.</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
