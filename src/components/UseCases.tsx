import React from 'react';
import './UseCases.css';

import imgBus from '../assets/bus-stop.png';
import imgVape from '../assets/adptado.png';
import imgEmergency from '../assets/emergencia.png';

const UseCases: React.FC = () => {
  return (
    <section className="usecases-section" id="usecases">
      <div className="usecases-container">
        <h2>Casos de Uso</h2>
        <p className="usecases-intro">
          O Enervape Charger foi projetado para reaproveitar vapes descartáveis como fonte de energia limpa e acessível,
          oferecendo soluções sustentáveis em locais públicos com pouco acesso à energia elétrica.
        </p>
        <div className="usecases-cards">

          {/* Card 1 */}
          <div className="usecase-card">
            <img src={imgBus} alt="Aproveitamento de materiais" className="usecase-image" />
            <div className="usecase-content">
              <div className="usecase-number">1</div>
              <h3>Aproveitamento de materiais</h3>
              <p>
                Vapes descartáveis são transformados em carregadores solares portáteis, prolongando sua vida útil e reduzindo o lixo eletrônico.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="usecase-card">
            <img src={imgVape} alt="Design adaptativo" className="usecase-image" />
            <div className="usecase-content">
              <div className="usecase-number">2</div>
              <h3>Design adaptativo</h3>
              <p>
                Os dispositivos foram adaptados para serem compactos, eficientes e compatíveis com diferentes necessidades de uso.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="usecase-card">
            <img src={imgEmergency} alt="Emergência e Continuidade" className="usecase-image" />
            <div className="usecase-content">
              <div className="usecase-number">3</div>
              <h3>Emergência e Continuidade</h3>
              <p>
                Oferecem uma fonte alternativa de energia em situações de emergência, como quedas de energia ou locais remotos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCases;
