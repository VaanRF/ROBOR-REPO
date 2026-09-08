import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula4.css';
import circuitoImg from '../../assets/imagens/aula4-botao.png';
import LinkML from '../../components/LinkML';

function Aula4() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 4</span>
          </div>
          <h1>🔘 Acendendo LED com Botão</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 40 minutos</span>
            <span className="aula-nivel">🌱 Iniciante / Intermediário</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Kit Básico - Link Afiliado */}
          <LinkML />

          {/* Objetivos */}
          <section className="aula-section objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
              <li>Entender o conceito de entrada digital com <code>digitalRead()</code></li>
              <li>Utilizar um botão como sensor de entrada</li>
              <li>Controlar um LED a partir do estado do botão</li>
              <li>Compreender o uso do <code>INPUT_PULLUP</code> no Arduino</li>
            </ul>
          </section>

          {/* Materiais */}
          <section className="aula-section materiais">
            <h2>🧩 Materiais Necessários</h2>
            <div className="materiais-grid">
              <div className="material-item">
                <span className="material-emoji">🔌</span>
                <span>Arduino Uno</span>
                <a href="https://meli.la/2RggVPo" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">💡</span>
                <span>LED (qualquer cor)</span>
                <a href="https://meli.la/2kS9Ug9" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">⚡</span>
                <span>Resistor 220Ω (para o LED)</span>
                <a href="https://meli.la/1gSceXs" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">⚡</span>
                <span>Resistor 10kΩ (para o botão)</span>
                <a href="https://meli.la/1gSceXs" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🔘</span>
                <span>Botão (push button)</span>
                <a href="https://meli.la/2aqx3tp" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🧱</span>
                <span>Protoboard</span>
                <a href="https://meli.la/2XCst25" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🔗</span>
                <span>Jumpers (macho-macho) 5x</span>
                <a href="https://meli.la/1Z2uybk" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🔌</span>
                <span>Cabo USB</span>
                <a href="https://meli.la/1Quo84H" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
            </div>
          </section>

          {/* Circuito */}
          <section className="aula-section circuito">
            <h2>📐 Esquema do Circuito</h2>
            <div className="circuito-diagrama">
              <pre className="ascii-diagram">
{`
  Arduino Uno          Protoboard
  ┌─────────┐
  │         │          ┌──────────────┐
  │    13   ├──────────┤ o───[R]───o│  ← LED
  │         │          │             │
  │     2   ├──────────┤ o───────┐  │
  │         │          │         │  │
  │   GND   ├──────────┤ GND     │  │
  │         │          │    └────o│  ← Resistor 10kΩ
  └─────────┘          └──────────┘
`}
              </pre>
            </div>
            
            <h3>📸 Foto do Circuito Montado</h3>
            <div className="foto-circuito">
              <div className="foto-placeholder">
                <img 
                  src={circuitoImg} 
                  alt="Circuito montado - LED com botão no Arduino"
                  className="foto-circuito-img"
                />
                <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
                  📸 Circuito montado na protoboard
                </p>
              </div>
            </div>

            <h3>🔌 Montagem Passo a Passo</h3>
            <ol className="montagem-passos">
              <li>
                <strong>Monte o circuito do LED</strong>
                <ul>
                  <li>Ânodo (perna longa) → resistor 220Ω → pino <strong>13</strong></li>
                  <li>Cátodo (perna curta) → GND</li>
                </ul>
              </li>
              <li>
                <strong>Monte o circuito do botão</strong>
                <ul>
                  <li>Uma perna do botão → pino <strong>2</strong></li>
                  <li>Outra perna do botão → resistor 10kΩ → <strong>GND</strong></li>
                  <li><strong style={{color: '#e94560'}}>⚠️ O resistor 10kΩ vai do botão até o GND</strong></li>
                </ul>
              </li>
              <li>
                <strong>Conecte os jumpers</strong>
                <ul>
                  <li>Jumper do pino <strong>13</strong> → resistor do LED</li>
                  <li>Jumper do pino <strong>2</strong> → uma perna do botão</li>
                  <li>Jumper do <strong>GND</strong> → resistor 10kΩ → outra perna do botão</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — LED com Botão</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-botao').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-botao">
{`// Código para acender um LED com um botão
// LED no pino 13, botão no pino 2
// Usando INPUT_PULLUP com resistor externo no GND

void setup() {
  pinMode(13, OUTPUT);          // LED como saída
  pinMode(2, INPUT_PULLUP);     // Botão como entrada com pull-up interno
}

void loop() {
  int estadoBotao = digitalRead(2);  // Lê o estado do botão
  
  if (estadoBotao == LOW) {          // Botão pressionado = LOW (com pull-up)
    digitalWrite(13, HIGH);          // Acende o LED
  } else {                           // Botão solto = HIGH
    digitalWrite(13, LOW);           // Apaga o LED
  }
}`}
              </pre>
            </div>

            <h3>📝 Explicação do Código</h3>
            <table className="explicacao-tabela">
              <thead>
                <tr>
                  <th>Linha</th>
                  <th>Explicação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>pinMode(13, OUTPUT);</code></td>
                  <td>Configura o pino 13 (LED) como saída</td>
                </tr>
                <tr>
                  <td><code>pinMode(2, INPUT_PULLUP);</code></td>
                  <td>Configura o pino 2 como entrada com resistor interno ativado</td>
                </tr>
                <tr>
                  <td><code>digitalRead(2);</code></td>
                  <td>Lê o estado do botão (LOW quando pressionado)</td>
                </tr>
                <tr>
                  <td><code>if (estadoBotao == LOW)</code></td>
                  <td>Verifica se o botão está pressionado (LOW)</td>
                </tr>
                <tr>
                  <td><code>digitalWrite(13, HIGH);</code></td>
                  <td>Acende o LED quando o botão é pressionado</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Inverta a lógica: o LED deve ficar aceso quando o botão <u>NÃO</u> estiver pressionado.</strong></p>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`void loop() {
  int estadoBotao = digitalRead(2);
  
  if (estadoBotao == LOW) {          // Botão pressionado
    digitalWrite(13, LOW);           // Apaga o LED
  } else {                           // Botão solto
    digitalWrite(13, HIGH);          // Acende o LED
  }
}`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>O que acontece se você não usar o resistor de 10kΩ?</li>
              <li>Por que o <code>INPUT_PULLUP</code> faz o botão ler <code>LOW</code> quando pressionado?</li>
              <li>Qual a diferença entre <code>INPUT</code> e <code>INPUT_PULLUP</code>?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Montei o circuito na protoboard
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Conectei o LED com resistor de 220Ω
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Conectei o botão com resistor de 10kΩ no GND
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Usei os pinos 13 (LED) e 2 (botão)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O LED acende quando pressiono o botão! 🎉
              </label>
            </div>
          </section>

          {/* Erros Comuns */}
          <section className="aula-section erros">
            <h2>🧪 Erros Comuns e Soluções</h2>
            <table className="erros-tabela">
              <thead>
                <tr>
                  <th>Problema</th>
                  <th>Solução</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LED não acende</td>
                  <td>Verifique a polaridade do LED (perna longa = positivo)</td>
                </tr>
                <tr>
                  <td>LED não acende</td>
                  <td>Confirme se o resistor de 220Ω está bem conectado</td>
                </tr>
                <tr>
                  <td>Botão não funciona</td>
                  <td>Verifique se o resistor de 10kΩ está conectado ao GND</td>
                </tr>
                <tr>
                  <td>Botão não funciona</td>
                  <td>Confirme se o pino 2 está com <code>INPUT_PULLUP</code></td>
                </tr>
                <tr>
                  <td>LED acende sozinho</td>
                  <td>Verifique se o resistor de 10kΩ está conectado corretamente</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/intro/aula/3" className="btn-anterior">← Aula Anterior</a>
          <a href="/intro/aula/5" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula4;