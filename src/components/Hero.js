import React from 'react';
import './styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>🚀 Aprenda Robótica na Prática</h2>
        <p>
          Projetos, códigos e materiais para você explorar o mundo da robótica
          no CJ Restinga.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Explorar Módulos</button>
          <button className="btn-secondary">Ver Projetos</button>
        </div>
      </div>
      <div className="hero-image">
        <span className="hero-emoji">⚡</span>
      </div>
    </section>
  );
}

export default Hero;