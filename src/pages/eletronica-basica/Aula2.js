import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula2.css';

function Aula2() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/eletronica">Eletrônica Básica</a> &gt; <span>Aula 2</span>
          </div>
          <h1>📐 Tensão, Corrente e Resistência</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Eletrônica Básica</span>
            <span className="aula-duracao">⏱️ 30 minutos</span>
            <span className="aula-nivel">🌱 Super Iniciante</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Introdução */}
          <section className="aula-section introducao">
            <h2>📊 As Três Grandezas Fundamentais</h2>
            <p>
              Tudo na eletrônica gira em torno de <strong>três grandezas</strong> que se relacionam:
              Tensão, Corrente e Resistência. Entender como elas funcionam juntas é a chave
              para dominar qualquer circuito.
            </p>
            <div className="triangulo-box">
              <div className="triangulo-item">
                <span className="triangulo-icone">⚡</span>
                <h4>Tensão (V)</h4>
                <p>"Pressão" que empurra os elétrons</p>
                <span className="unidade">Volts (V)</span>
              </div>
              <div className="triangulo-item">
                <span className="triangulo-icone">🌊</span>
                <h4>Corrente (I)</h4>
                <p>Fluxo de elétrons pelo circuito</p>
                <span className="unidade">Amperes (A)</span>
              </div>
              <div className="triangulo-item">
                <span className="triangulo-icone">🛑</span>
                <h4>Resistência (R)</h4>
                <p>Dificuldade que os elétrons encontram</p>
                <span className="unidade">Ohms (Ω)</span>
              </div>
            </div>
          </section>

          {/* Analogia da Água */}
          <section className="aula-section analogia">
            <h2>💧 A Analogia da Água</h2>
            <p>
              A melhor forma de entender essas três grandezas é comparando a eletricidade com
              <strong> água em uma mangueira</strong>:
            </p>
            <div className="analogia-grid">
              <div className="analogia-card">
                <div className="analogia-icon">💧</div>
                <h4>Pressão da Água</h4>
                <p>É a <strong>Tensão (V)</strong></p>
                <span>Quanto maior a pressão, mais força a água tem para sair.</span>
              </div>
              <div className="analogia-card">
                <div className="analogia-icon">🚰</div>
                <h4>Fluxo de Água</h4>
                <p>É a <strong>Corrente (I)</strong></p>
                <span>Quanto mais água passa, maior o fluxo.</span>
              </div>
              <div className="analogia-card">
                <div className="analogia-icon">🚧</div>
                <h4>Diâmetro da Mangueira</h4>
                <p>É a <strong>Resistência (R)</strong></p>
                <span>Mangueira fina = mais resistência; grossa = menos.</span>
              </div>
            </div>
          </section>

          {/* A Lei de Ohm */}
          <section className="aula-section lei-ohm">
            <h2>📐 A Lei de Ohm</h2>
            <p>
              A Lei de Ohm é a <strong>fórmula matemática</strong> que relaciona as três grandezas:
            </p>
            <div className="formula-destaque">
              <span className="formula-grande">V = R × I</span>
            </div>
            <p style={{ textAlign: 'center', margin: '0.5rem 0' }}>
              <strong>V</strong> = Tensão (Volts) · <strong>R</strong> = Resistência (Ohms) · <strong>I</strong> = Corrente (Amperes)
            </p>
            <div className="triangulo-ohm">
              <div className="triangulo-ohm-item">
                <span>V</span>
                <small>Volts</small>
              </div>
              <div className="triangulo-ohm-item">
                <span>R</span>
                <small>Ohms</small>
              </div>
              <div className="triangulo-ohm-item">
                <span>I</span>
                <small>Amperes</small>
              </div>
            </div>
          </section>

          {/* Como Usar a Lei de Ohm */}
          <section className="aula-section usar-ohm">
            <h2>🧮 Como Usar a Lei de Ohm</h2>
            <p>
              Com a Lei de Ohm, você pode calcular qualquer uma das três grandezas
              se tiver as outras duas:
            </p>

            <div className="formulas-grid">
              <div className="formula-card">
                <h4>Para calcular a Tensão</h4>
                <div className="formula-card-box">
                  <span className="formula-card-grande">V = R × I</span>
                </div>
                <p className="formula-card-exemplo">
                  Ex: R = 220Ω, I = 0,02A → V = 220 × 0,02 = <strong>4,4V</strong>
                </p>
              </div>

              <div className="formula-card">
                <h4>Para calcular a Corrente</h4>
                <div className="formula-card-box">
                  <span className="formula-card-grande">I = V / R</span>
                </div>
                <p className="formula-card-exemplo">
                  Ex: V = 5V, R = 220Ω → I = 5 / 220 = <strong>0,022A (22mA)</strong>
                </p>
              </div>

              <div className="formula-card">
                <h4>Para calcular a Resistência</h4>
                <div className="formula-card-box">
                  <span className="formula-card-grande">R = V / I</span>
                </div>
                <p className="formula-card-exemplo">
                  Ex: V = 5V, I = 0,02A → R = 5 / 0,02 = <strong>250Ω</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Exemplo Prático */}
          <section className="aula-section exemplo-pratico">
            <h2>🔦 Exemplo Prático — LED com Resistor</h2>
            <p>
              Vamos aplicar a Lei de Ohm para calcular o resistor necessário para um LED:
            </p>

            <div className="exemplo-passo-a-passo">
              <div className="passo">
                <span className="passo-numero">1</span>
                <div className="passo-conteudo">
                  <h4>Identificar os dados</h4>
                  <ul>
                    <li>Tensão da fonte: <strong>5V</strong> (Arduino)</li>
                    <li>Tensão do LED: <strong>2V</strong></li>
                    <li>Corrente do LED: <strong>20mA (0,02A)</strong></li>
                  </ul>
                </div>
              </div>

              <div className="passo">
                <span className="passo-numero">2</span>
                <div className="passo-conteudo">
                  <h4>Calcular a tensão no resistor</h4>
                  <p style={{ fontSize: '1.2rem' }}>
                    V<sub>R</sub> = V<sub>fonte</sub> - V<sub>LED</sub>
                  </p>
                  <p>V<sub>R</sub> = 5V - 2V = <strong>3V</strong></p>
                </div>
              </div>

              <div className="passo">
                <span className="passo-numero">3</span>
                <div className="passo-conteudo">
                  <h4>Aplicar a Lei de Ohm</h4>
                  <p style={{ fontSize: '1.2rem' }}>
                    R = V / I
                  </p>
                  <p>R = 3V / 0,02A = <strong>150Ω</strong></p>
                  <span className="passo-obs">Valor comercial mais próximo: 220Ω ou 180Ω</span>
                </div>
              </div>
            </div>

            <div className="esquema-box">
              <h4>🔌 Esquema do Circuito</h4>
              <pre className="ascii-diagram">
{`
  5V ──[ Resistor ]──[ LED ]── GND
          220Ω
`}
              </pre>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                O resistor de 220Ω é o mais comum e funciona bem para a maioria dos LEDs com Arduino.
              </p>
            </div>
          </section>

          {/* Ferramentas */}
          <section className="aula-section ferramentas">
            <h2>🛠️ Ferramentas para Praticar</h2>
            <div className="ferramentas-grid">
              <div className="ferramenta-item">
                <span className="ferramenta-icone">🧮</span>
                <h4>Calculadora de LED</h4>
                <p>
                  Use uma calculadora online para verificar seus cálculos.
                </p>
                <a href="#" className="ferramenta-link" target="_blank" rel="noopener noreferrer">
                  Acessar →
                </a>
              </div>
              <div className="ferramenta-item">
                <span className="ferramenta-icone">🔧</span>
                <h4>Simulador de Circuitos</h4>
                <p>
                  Simule seus circuitos antes de montar na protoboard.
                </p>
                <a href="#" className="ferramenta-link" target="_blank" rel="noopener noreferrer">
                  Acessar →
                </a>
              </div>
              <div className="ferramenta-item">
                <span className="ferramenta-icone">📱</span>
                <h4>App de Eletrônica</h4>
                <p>
                  Calcule resistores, veja código de cores e muito mais.
                </p>
                <a href="#" className="ferramenta-link" target="_blank" rel="noopener noreferrer">
                  Acessar →
                </a>
              </div>
            </div>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Calcule o resistor necessário para os seguintes casos:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li><strong>LED azul</strong>: 3V, 20mA, fonte 9V</li>
                <li><strong>LED vermelho</strong>: 1,8V, 30mA, fonte 5V</li>
                <li><strong>LED branco</strong>: 3,3V, 25mA, fonte 12V</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`LED AZUL (9V):
R = (9V - 3V) / 0,02A = 6 / 0,02 = 300Ω  → 330Ω

LED VERMELHO (5V):
R = (5V - 1,8V) / 0,03A = 3,2 / 0,03 = 106Ω  → 100Ω

LED BRANCO (12V):
R = (12V - 3,3V) / 0,025A = 8,7 / 0,025 = 348Ω  → 330Ω`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>O que acontece se a corrente for muito alta para um componente?</li>
              <li>Por que os fios elétricos são feitos de cobre?</li>
              <li>Se aumentarmos a resistência em um circuito, o que acontece com a corrente?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Entendo a analogia da água com eletricidade
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei o que é Tensão, Corrente e Resistência
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei usar a Lei de Ohm (V = R × I)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei calcular um resistor para um LED
              </label>
            </div>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/eletronica/1" className="btn-anterior">← Aula Anterior</a>
          <a href="/eletronica/3" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula2;