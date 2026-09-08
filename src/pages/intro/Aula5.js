import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula5.css';
import circuitoImg from '../../assets/imagens/aula4-botao.png';
import LinkML from '../../components/LinkML';

function Aula5() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 5</span>
          </div>
          <h1>🚦 Semáforo com Botão de Pedestre</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 50 minutos</span>
            <span className="aula-nivel">🌱 Intermediário</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Kit Básico - Link Afiliado */}
          <LinkML />

          {/* Objetivos */}
          <section className="aula-section objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
              <li>Compreender o funcionamento de um semáforo com acionamento por pedestre</li>
              <li>Utilizar um botão para interromper o ciclo verde</li>
              <li>Implementar uma sequência lógica: Verde → Amarelo → Vermelho → Pedestre → Verde</li>
              <li>Trabalhar com variáveis de estado e controle de fluxo</li>
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
                <span>Jumpers (macho-macho) 7x</span>
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
  │     2   ├──────────┤ o───────┐  │  ← Botão
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
                  alt="Circuito montado - Semáforo com botão de pedestre"
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
                <strong>Monte os LEDs na protoboard</strong>
                <ul>
                  <li>LED Vermelho: ânodo → resistor 220Ω → pino <strong>13</strong></li>
                  <li>LED Amarelo: ânodo → resistor 220Ω → pino <strong>12</strong></li>
                  <li>LED Verde: ânodo → resistor 220Ω → pino <strong>11</strong></li>
                  <li>Cátodos de todos os LEDs → GND</li>
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
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — Semáforo com Botão de Pedestre</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-semaforo-pedestre').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-semaforo-pedestre">
{`// Código para semáforo com botão de pedestre
// LED Vermelho: pino 13, Amarelo: pino 12, Verde: pino 11
// Botão: pino 2 com resistor 10kΩ no GND

int estadoBotao = 0;          // Estado atual do botão
int ultimoEstadoBotao = 0;    // Último estado do botão
bool pedestreChamando = false; // Flag para chamada do pedestre

void setup() {
  pinMode(13, OUTPUT);  // LED Vermelho
  pinMode(12, OUTPUT);  // LED Amarelo
  pinMode(11, OUTPUT);  // LED Verde
  pinMode(2, INPUT_PULLUP);  // Botão com pull-up interno
}

void loop() {
  // Lê o estado do botão
  estadoBotao = digitalRead(2);
  
  // Verifica se o botão foi pressionado (transição HIGH → LOW)
  if (estadoBotao == LOW && ultimoEstadoBotao == HIGH) {
    pedestreChamando = true;  // Ativa a chamada do pedestre
  }
  ultimoEstadoBotao = estadoBotao;
  
  // Se o pedestre estiver chamando, executa o ciclo
  if (pedestreChamando == true) {
    // Fica verde por mais 2 segundos (dá tempo para quem está no cruzamento)
    digitalWrite(11, HIGH);   // Verde aceso
    digitalWrite(12, LOW);
    digitalWrite(13, LOW);
    delay(2000);
    
    // Amarelo (atenção)
    digitalWrite(11, LOW);
    digitalWrite(12, HIGH);   // Amarelo aceso
    digitalWrite(13, LOW);
    delay(3000);
    
    // Vermelho (pare)
    digitalWrite(11, LOW);
    digitalWrite(12, LOW);
    digitalWrite(13, HIGH);   // Vermelho aceso
    delay(5000);              // Tempo para pedestre atravessar
    
    // Volta para o verde
    pedestreChamando = false; // Reseta a chamada
  }
  
  // Estado normal: sempre verde
  digitalWrite(11, HIGH);   // Verde aceso
  digitalWrite(12, LOW);
  digitalWrite(13, LOW);
  delay(100);  // Pequeno delay para não sobrecarregar o loop
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
                  <td><code>bool pedestreChamando = false;</code></td>
                  <td>Variável que controla se o pedestre apertou o botão</td>
                </tr>
                <tr>
                  <td><code>digitalRead(2);</code></td>
                  <td>Lê o estado do botão (LOW quando pressionado)</td>
                </tr>
                <tr>
                  <td><code>if (estadoBotao == LOW && ultimoEstadoBotao == HIGH)</code></td>
                  <td>Detecta o momento exato em que o botão foi pressionado (transição)</td>
                </tr>
                <tr>
                  <td><code>pedestreChamando = true;</code></td>
                  <td>Ativa a chamada do pedestre</td>
                </tr>
                <tr>
                  <td><code>delay(2000);</code></td>
                  <td>Mantém o verde por mais 2 segundos antes de mudar</td>
                </tr>
                <tr>
                  <td><code>digitalWrite(13, HIGH);</code></td>
                  <td>Acende o vermelho para o pedestre atravessar</td>
                </tr>
                <tr>
                  <td><code>pedestreChamando = false;</code></td>
                  <td>Reseta a chamada, voltando ao ciclo normal</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Modifique o código para que o semáforo pisque o amarelo 5 vezes antes de abrir para o pedestre.</strong></p>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`// Amarelo piscando 5 vezes antes do vermelho
for (int i = 0; i < 5; i++) {
  digitalWrite(12, HIGH);
  delay(500);
  digitalWrite(12, LOW);
  delay(500);
}

// Vermelho (pare)
digitalWrite(13, HIGH);
delay(5000);`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Por que usamos a variável <code>pedestreChamando</code>?</li>
              <li>O que acontece se o pedestre apertar o botão mais de uma vez?</li>
              <li>Como você faria para o semáforo ignorar o botão por alguns segundos após a travessia?</li>
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
                <input type="checkbox" /> Conectei o botão com resistor 10kΩ no GND
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Usei os pinos 13, 12, 11 e 2
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O semáforo fica verde e muda quando aperto o botão! 🚦🎉
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
                  <td>Semáforo não fica verde</td>
                  <td>Verifique se o LED verde está no pino 11</td>
                </tr>
                <tr>
                  <td>Botão não funciona</td>
                  <td>Verifique o resistor 10kΩ no GND e o pino 2</td>
                </tr>
                <tr>
                  <td>Botão não funciona</td>
                  <td>Confirme se <code>INPUT_PULLUP</code> está no código</td>
                </tr>
                <tr>
                  <td>Semáforo não volta ao verde</td>
                  <td>Verifique se <code>pedestreChamando = false</code> está no código</td>
                </tr>
                <tr>
                  <td>LEDs não acendem</td>
                  <td>Confirme a polaridade dos LEDs</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/intro/aula/4" className="btn-anterior">← Aula Anterior</a>
          <a href="/intro/aula/6" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula5;