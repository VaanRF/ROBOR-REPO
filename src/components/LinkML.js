import React from 'react';
import './styles/LinkML.css';

function LinkML () {
  return (
<section className="aula-section kit-destaque">
            <div className="kit-box">
              <span className="kit-icone">🧰</span>
              <div className="kit-info">
                <h3>🎯 Kit Básico de Robótica com Arduino</h3>
                <p>Tenha todos os componentes para acompanhar as aulas!</p>
                <a 
                  href="https://meli.la/1jgda2T" 
                  className="btn-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🛒 Comprar Kit no Mercado Livre
                </a>
                <small className="kit-obs">*Link de afiliado - você apoia o projeto</small>
              </div>
            </div>
          </section>
  );
}

export default LinkML;