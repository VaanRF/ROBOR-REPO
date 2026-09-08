import React from 'react';
import './styles/ProjetosDestaque.css';

const projetos = [
  { id: 1, titulo: 'Semáforo com Arduino', nivel: 'Intermediário', emoji: '🚦' },
  { id: 2, titulo: 'Carrinho Seguidor de Linha', nivel: 'Avançado', emoji: '🚗' },
  { id: 3, titulo: 'Estação Meteorológica', nivel: 'Intermediário', emoji: '🌡️' },
];

function ProjetosDestaque() {
  return (
    <section className="projetos">
      <h2 className="section-title">🌟 Projetos em Destaque</h2>
      <div className="projetos-grid">
        {projetos.map(projeto => (
          <div key={projeto.id} className="projeto-card">
            <div className="projeto-emoji">{projeto.emoji}</div>
            <h3>{projeto.titulo}</h3>
            <span className={`nivel ${projeto.nivel.toLowerCase()}`}>
              {projeto.nivel}
            </span>
            <button className="btn-ver">Ver Projeto →</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjetosDestaque;