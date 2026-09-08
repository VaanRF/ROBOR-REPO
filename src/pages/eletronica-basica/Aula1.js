import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula1.css';

function Aula1() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/eletronica">Eletrônica Básica</a> &gt; <span>Aula 1</span>
          </div>
          <h1>⚡ O que é Eletricidade?</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Eletrônica Básica</span>
            <span className="aula-duracao">⏱️ 20 minutos</span>
            <span className="aula-nivel">🌱 Super Iniciante</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Introdução */}
          <section className="aula-section introducao">
            <h2>🔌 O que é Eletricidade?</h2>
            <p>
              A eletricidade é o <strong>fluxo de elétrons</strong> através de um material condutor.
              É como a água em uma mangueira: precisa de pressão (tensão) e um caminho (circuito).
            </p>
            <div className="analogia-box">
              <div className="analogia-item">
                <span className="analogia-icone">💧</span>
                <div>
                  <h4>Água</h4>
                  <p>Pressão da água = Tensão (Volts)</p>
                  <p>Quantidade de água = Corrente (Amperes)</p>
                  <p>Diâmetro da mangueira = Resistência (Ohms)</p>
                </div>
              </div>
              <div className="analogia-item">
                <span className="analogia-icone">⚡</span>
                <div>
                  <h4>Eletricidade</h4>
                  <p>Força que empurra = Tensão (V)</p>
                  <p>Fluxo de elétrons = Corrente (A)</p>
                  <p>Dificuldade de passagem = Resistência (Ω)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tensão */}
          <section className="aula-section tensao">
            <h2>🔋 Tensão (Volts)</h2>
            <p>
              A tensão é a <strong>"pressão"</strong> que empurra os elétrons pelo circuito.
              É medida em <strong>Volts (V)</strong>.
            </p>
            <div className="conceito-box">
              <div className="conceito-exemplo">
                <span className="conceito-icone">🔋</span>
                <div>
                  <h4>Exemplos:</h4>
                  <ul>
                    <li><strong>Pilha AA:</strong> 1,5V</li>
                    <li><strong>Bateria 9V:</strong> 9V</li>
                    <li><strong>Arduino:</strong> 5V</li>
                    <li><strong>Tomada:</strong> 110V ou 220V</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Corrente */}
          <section className="aula-section corrente">
            <h2>🔌 Corrente (Amperes)</h2>
            <p>
              A corrente é a <strong>quantidade de elétrons</strong> que passam por um ponto do circuito
              a cada segundo. É medida em <strong>Amperes (A)</strong>.
            </p>
            <div className="conceito-box">
              <div className="conceito-exemplo">
                <span className="conceito-icone">💡</span>
                <div>
                  <h4>Exemplos:</h4>
                  <ul>
                    <li><strong>LED:</strong> 20mA (0,02A)</li>
                    <li><strong>Motor pequeno:</strong> 100mA (0,1A)</li>
                    <li><strong>Carregador USB:</strong> 2A</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Resistência */}
          <section className="aula-section resistencia">
            <h2>🛑 Resistência (Ohms)</h2>
            <p>
              A resistência é a <strong>dificuldade</strong> que os elétrons encontram para passar
              pelo material. É medida em <strong>Ohms (Ω)</strong>.
            </p>
            <div className="conceito-box">
              <div className="conceito-exemplo">
                <span className="conceito-icone">🔄</span>
                <div>
                  <h4>Exemplos:</h4>
                  <ul>
                    <li><strong>Resistor usado com LED:</strong> 220Ω</li>
                    <li><strong>Cabo de cobre:</strong> quase 0Ω (bom condutor)</li>
                    <li><strong>Borracha:</strong> milhões de Ω (isolante)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Lei de Ohm */}
          <section className="aula-section lei-ohm">
            <h2>📐 Lei de Ohm</h2>
            <p>
              A Lei de Ohm é a <strong>fórmula fundamental</strong> da eletrônica:
            </p>
            <div className="formula-box">
              <span className="formula-grande">V = R × I</span>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                <strong>V</strong> = Tensão (Volts) · <strong>R</strong> = Resistência (Ohms) · <strong>I</strong> = Corrente (Amperes)
              </p>
            </div>
            <div className="exemplo-box">
              <h4>📝 Exemplo prático:</h4>
              <p>
                Um LED precisa de <strong>2V</strong> e <strong>20mA</strong>.
                Se ligarmos direto em 5V, qual resistor usar?
              </p>
              <pre className="codigo-pre">
{`R = (V_fonte - V_LED) / I_LED
R = (5V - 2V) / 0,02A
R = 3V / 0,02A
R = 150Ω  →  Usamos 220Ω (valor comercial)`}
              </pre>
            </div>
          </section>

          {/* Materiais */}
          <section className="aula-section materiais">
            <h2>🧩 Kit Básico para Praticar</h2>
            <div className="kit-simples-box">
              <p style={{ marginBottom: '1rem' }}>
                Para praticar os conceitos de eletricidade, você vai precisar de:
              </p>
              <div className="materiais-grid">
                <div className="material-item">
                  <span className="material-emoji">🔋</span>
                  <span>Bateria 9V</span>
                </div>
                <div className="material-item">
                  <span className="material-emoji">💡</span>
                  <span>LED</span>
                </div>
                <div className="material-item">
                  <span className="material-emoji">⚡</span>
                  <span>Resistor 220Ω</span>
                </div>
                <div className="material-item">
                  <span className="material-emoji">🧱</span>
                  <span>Protoboard</span>
                </div>
                <div className="material-item">
                  <span className="material-emoji">🔗</span>
                  <span>Jumpers</span>
                </div>
              </div>
            </div>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Calcule o resistor necessário para um LED com as seguintes características:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Tensão da fonte: <strong>9V</strong></li>
                <li>Tensão do LED: <strong>2V</strong></li>
                <li>Corrente do LED: <strong>20mA</strong></li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`R = (9V - 2V) / 0,02A
R = 7V / 0,02A
R = 350Ω

Valor comercial mais próximo: 330Ω ou 470Ω`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>O que acontece se ligarmos um LED sem resistor?</li>
              <li>Por que o cobre é usado em fios elétricos?</li>
              <li>Qual a diferença entre uma pilha e uma tomada?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Entendo o que é tensão (Volts)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Entendo o que é corrente (Amperes)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Entendo o que é resistência (Ohms)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei usar a Lei de Ohm para calcular resistores
              </label>
            </div>
          </section>
        </div>

        <div className="aula-navegacao">
          <button className="btn-anterior" disabled>← Aula Anterior</button>
          <a href="/eletronica/2" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula1;