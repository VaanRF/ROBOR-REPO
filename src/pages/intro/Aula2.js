import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula2.css';
import circuitoImg from '../../assets/imagens/aula1-circuit.png';
import LinkML from '../../components/LinkML';
function Aula2() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 2</span>
          </div>
          <h1>💡 LED Piscando</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 30 minutos</span>
            <span className="aula-nivel">🌱 Iniciante</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Kit Básico - Link Afiliado */}
          <LinkML />

          {/* Objetivos */}
          <section className="aula-section objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
              <li>Entender o conceito de temporização com <code>delay()</code></li>
              <li>Controlar o LED alternando entre ligado e desligado</li>
              <li>Modificar a velocidade do pisca-pisca</li>
              <li>Compreender a diferença entre <code>HIGH</code> e <code>LOW</code></li>
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
                <span>Resistor 220Ω</span>
                <a href="https://meli.la/1gSceXs" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🧱</span>
                <span>Protoboard</span>
                <a href="https://meli.la/2XCst25" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🔗</span>
                <span>Jumpers (macho-macho) 2x</span>
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
  │         │          ┌──────────┐
  │    13   ├──────────┤ o───────o│  ← LED (ânodo/perna longa)
  │         │          │    │    │
  │   GND   ├──────────┤    │    │
  │         │          │    └────o│  ← Resistor 220Ω
  └─────────┘          └──────────┘
`}
              </pre>
            </div>
            
            <h3>📸 Foto do Circuito Montado</h3>
            <div className="foto-circuito">
              <div className="foto-placeholder">
                <img 
                  src={circuitoImg} 
                  alt="Circuito montado - LED piscando no Arduino"
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
                <strong>Conecte o LED na protoboard</strong>
                <ul>
                  <li>Perna <strong>longa</strong> (ânodo/positivo) em uma linha</li>
                  <li>Perna <strong>curta</strong> (cátodo/negativo) em outra linha</li>
                </ul>
              </li>
              <li>
                <strong>Conecte o resistor</strong>
                <ul>
                  <li>Uma perna do resistor na mesma linha do cátodo (perna curta)</li>
                  <li>A outra perna do resistor no trilho negativo (GND)</li>
                </ul>
              </li>
              <li>
                <strong>Conecte os jumpers</strong>
                <ul>
                  <li>Jumper do pino <strong>13</strong> (digital) → linha do ânodo (perna longa)</li>
                  <li>Jumper do pino <strong>GND</strong> → trilho negativo onde está o resistor</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — LED Piscando</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-led-piscando').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-led-piscando">
{`// Código para piscar um LED no pino 13

void setup() {
  pinMode(13, OUTPUT);  // Configura o pino 13 como saída
}

void loop() {
  digitalWrite(13, HIGH);   // Liga o LED
  delay(1000);              // Aguarda 1 segundo (1000ms)
  digitalWrite(13, LOW);    // Desliga o LED
  delay(1000);              // Aguarda 1 segundo (1000ms)
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
                  <td>Configura o pino 13 para enviar sinal (saída)</td>
                </tr>
                <tr>
                  <td><code>digitalWrite(13, HIGH);</code></td>
                  <td>Envia 5V para o pino 13, acendendo o LED</td>
                </tr>
                <tr>
                  <td><code>delay(1000);</code></td>
                  <td>Pausa a execução por 1000 milissegundos (1 segundo)</td>
                </tr>
                <tr>
                  <td><code>digitalWrite(13, LOW);</code></td>
                  <td>Envia 0V para o pino 13, apagando o LED</td>
                </tr>
                <tr>
                  <td><code>delay(1000);</code></td>
                  <td>Pausa novamente por 1 segundo antes de repetir</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Faça o LED piscar mais rápido (a cada 200ms) e depois mais devagar (a cada 2 segundos).</strong></p>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`// Piscando rápido (200ms)
void loop() {
  digitalWrite(13, HIGH);
  delay(200);
  digitalWrite(13, LOW);
  delay(200);
}

// Piscando devagar (2 segundos)
void loop() {
  digitalWrite(13, HIGH);
  delay(2000);
  digitalWrite(13, LOW);
  delay(2000);
}`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>O que acontece se você remover o <code>delay(1000)</code> depois do <code>LOW</code>?</li>
              <li>Qual a diferença entre <code>HIGH</code> e <code>LOW</code>?</li>
              <li>Como você faria para o LED piscar 3 vezes e depois ficar apagado?</li>
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
                <input type="checkbox" /> Conectei o resistor ao cátodo do LED
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Usei o pino digital 13
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O LED está piscando! 🎉
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
                  <td>LED não pisca</td>
                  <td>Confirme se o <code>delay()</code> está com valor correto</td>
                </tr>
                <tr>
                  <td>LED fica sempre aceso</td>
                  <td>Verifique se o <code>digitalWrite(13, LOW)</code> está presente</td>
                </tr>
                <tr>
                  <td>LED fica sempre apagado</td>
                  <td>Veja se o <code>digitalWrite(13, HIGH)</code> está presente</td>
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
          <a href="/intro/aula/1" className="btn-anterior">← Aula Anterior</a>
          <a href="/intro/aula/3" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula2;