import React from 'react';
import './team.css';

const Team: React.FC = () => {
  return (
    <section className="team" id="team">
      <h2>Equipe</h2>
      <div className="team-members">
        <div className="member">
          <img src="https://via.placeholder.com/100" alt="Gabriel" />
          <h3>Gabriel Moia</h3>
          <p>Desenvolvedor Full Stack</p>
        </div>
        <div className="member">
          <img src="https://via.placeholder.com/100" alt="Membro 2" />
          <h3>Nome Sobrenome</h3>
          <p>Hardware e Prototipagem</p>
        </div>
        <div className="member">
          <img src="https://via.placeholder.com/100" alt="Membro 3" />
          <h3>Nome Sobrenome</h3>
          <p>Design e Impacto Social</p>
        </div>
      </div>
    </section>
  );
};

export default Team;

