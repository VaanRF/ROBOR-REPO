import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula3.css';
import circuitoImg from '../../assets/imagens/aula3-semaforo.png';
import LinkML from '../../components/LinkML';

function Aula3() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 3</span>
          </div>
          <h1>🚦 Simulação de um Semáforo</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 45 minutos</span>
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
              <li>Utilizar múltiplos LEDs em um único projeto</li>
              <li>Compreender a lógica de um semáforo (verde → amarelo → vermelho)</li>
              <li>Controlar o tempo de cada etapa com <code>delay()</code></li>
              <li>Organizar o código de forma clara e estruturada</li>
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
                <span className="material-emoji">🔴</span>
                <span>LED Vermelho</span>
                <a href="https://meli.la/2kS9Ug9" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🟡</span>
                <span>LED Amarelo</span>
                <a href="https://meli.la/2kS9Ug9" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🟢</span>
                <span>LED Verde</span>
                <a href="https://meli.la/2kS9Ug9" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">⚡</span>
                <span>Resistores 220Ω (3x)</span>
                <a href="https://meli.la/1gSceXs" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
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
  │    13   ├──────────┤ o───[R]───o│  ← LED Vermelho
  │    12   ├──────────┤ o───[R]───o│  ← LED Amarelo
  │    11   ├──────────┤ o───[R]───o│  ← LED Verde
  │         │          │             │
  │   GND   ├──────────┤ GND (trilho)│
  └─────────┘          └──────────────┘
`}
              </pre>
            </div>
            
            <h3>📸 Foto do Circuito Montado</h3>
            <div className="foto-circuito">
              <div className="foto-placeholder">
                <img 
                  src={circuitoImg} 
                  alt="Circuito montado - Semáforo com Arduino"
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
                <strong>Conecte os LEDs na protoboard</strong>
                <ul>
                  <li>LED Vermelho: ânodo (perna longa) em uma linha, cátodo em outra</li>
                  <li>LED Amarelo: ânodo (perna longa) em uma linha, cátodo em outra</li>
                  <li>LED Verde: ânodo (perna longa) em uma linha, cátodo em outra</li>
                </ul>
              </li>
              <li>
                <strong>Conecte os resistores</strong>
                <ul>
                  <li>Um resistor do cátodo de cada LED para o trilho GND</li>
                </ul>
              </li>
              <li>
                <strong>Conecte os jumpers</strong>
                <ul>
                  <li>Jumper do pino <strong>13</strong> → ânodo do LED Vermelho</li>
                  <li>Jumper do pino <strong>12</strong> → ânodo do LED Amarelo</li>
                  <li>Jumper do pino <strong>11</strong> → ânodo do LED Verde</li>
                  <li>Jumper do pino <strong>GND</strong> → trilho negativo</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — Semáforo</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-semaforo').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-semaforo">
{`// Código para simular um semáforo com 3 LEDs
// Pinos: 13 = Vermelho, 12 = Amarelo, 11 = Verde

void setup() {
  pinMode(13, OUTPUT);  // LED Vermelho
  pinMode(12, OUTPUT);  // LED Amarelo
  pinMode(11, OUTPUT);  // LED Verde
}

void loop() {
  // Sinal Verde
  digitalWrite(13, LOW);   // Apaga Vermelho
  digitalWrite(12, LOW);   // Apaga Amarelo
  digitalWrite(11, HIGH);  // Acende Verde
  delay(5000);             // Verde por 5 segundos

  // Sinal Amarelo
  digitalWrite(13, LOW);   // Apaga Vermelho
  digitalWrite(12, HIGH);  // Acende Amarelo
  digitalWrite(11, LOW);   // Apaga Verde
  delay(2000);             // Amarelo por 2 segundos

  // Sinal Vermelho
  digitalWrite(13, HIGH);  // Acende Vermelho
  digitalWrite(12, LOW);   // Apaga Amarelo
  digitalWrite(11, LOW);   // Apaga Verde
  delay(5000);             // Vermelho por 5 segundos
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
                  <td>Configura o pino 13 (Vermelho) como saída</td>
                </tr>
                <tr>
                  <td><code>pinMode(12, OUTPUT);</code></td>
                  <td>Configura o pino 12 (Amarelo) como saída</td>
                </tr>
                <tr>
                  <td><code>pinMode(11, OUTPUT);</code></td>
                  <td>Configura o pino 11 (Verde) como saída</td>
                </tr>
                <tr>
                  <td><code>digitalWrite(11, HIGH);</code></td>
                  <td>Acende o LED Verde (pino 11)</td>
                </tr>
                <tr>
                  <td><code>delay(5000);</code></td>
                  <td>Aguarda 5 segundos (5000ms)</td>
                </tr>
                <tr>
                  <td><code>digitalWrite(12, HIGH);</code></td>
                  <td>Acende o LED Amarelo (pino 12)</td>
                </tr>
                <tr>
                  <td><code>digitalWrite(13, HIGH);</code></td>
                  <td>Acende o LED Vermelho (pino 13)</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Modifique o código para que o semáforo funcione com os tempos de uma cidade real:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Verde: <strong>8 segundos</strong></li>
                <li>Amarelo: <strong>3 segundos</strong></li>
                <li>Vermelho: <strong>8 segundos</strong></li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`// Sinal Verde
digitalWrite(13, LOW);
digitalWrite(12, LOW);
digitalWrite(11, HIGH);
delay(8000);  // 8 segundos

// Sinal Amarelo
digitalWrite(13, LOW);
digitalWrite(12, HIGH);
digitalWrite(11, LOW);
delay(3000);  // 3 segundos

// Sinal Vermelho
digitalWrite(13, HIGH);
digitalWrite(12, LOW);
digitalWrite(11, LOW);
delay(8000);  // 8 segundos`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Por que precisamos de 3 resistores neste projeto?</li>
              <li>O que acontece se você inverter a ordem dos sinais?</li>
              <li>Como você faria para adicionar um LED de pedestre?</li>
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
                <input type="checkbox" /> Conectei os 3 LEDs com seus resistores
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Usei os pinos 13, 12 e 11
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O semáforo está funcionando! 🚦🎉
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
                  <td>Verifique a polaridade (perna longa = positivo)</td>
                </tr>
                <tr>
                  <td>LEDs acendem na ordem errada</td>
                  <td>Confira se os pinos no código correspondem à montagem</td>
                </tr>
                <tr>
                  <td>LED não acende</td>
                  <td>Confirme se os resistores estão bem conectados</td>
                </tr>
                <tr>
                  <td>LEDs não apagam</td>
                  <td>Verifique se há <code>digitalWrite(pino, LOW)</code> para cada LED</td>
                </tr>
                <tr>
                  <td>Arduino não reconhece</td>
                  <td>Verifique o cabo USB e a porta COM</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/intro/aula/2" className="btn-anterior">← Aula Anterior</a>
          <a href="/intro/aula/4" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula3;