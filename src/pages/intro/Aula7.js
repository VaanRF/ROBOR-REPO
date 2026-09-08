import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula7.css';
import circuitoImg from '../../assets/imagens/aula6-ultrassonico.png';
import LinkML from '../../components/LinkML';

function Aula7() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 7</span>
          </div>
          <h1>🚦 Semáforo Inteligente com Detecção de Pedestre</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 55 minutos</span>
            <span className="aula-nivel">🌱 Intermediário / Avançado</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Kit Básico - Link Afiliado */}
          <LinkML />  

          {/* Objetivos */}
          <section className="aula-section objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
              <li>Implementar um semáforo com detecção inteligente de pedestres</li>
              <li>Compreender o conceito de <strong>máquina de estados</strong></li>
              <li>Manter o sinal verde até que um pedestre seja detectado</li>
              <li>Executar o ciclo completo: Verde → Amarelo → Vermelho → Verde</li>
              <li>Ignorar novas solicitações durante a travessia</li>
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
                <a href="#" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
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
  │     2   ├──────────┤ o───────┐  │  ← Botão (pedestre)
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
                  alt="Circuito montado - Semáforo inteligente com botão"
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
            <h2>💻 Código — Semáforo Inteligente</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-semaforo-inteligente').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-semaforo-inteligente">
{`// Código para Semáforo Inteligente com Detecção de Pedestre
// LED Vermelho: pino 13, Amarelo: pino 12, Verde: pino 11
// Botão (pedestre): pino 2 com resistor 10kΩ no GND

int estadoBotao = 0;
int ultimoEstadoBotao = 0;
bool pedestreChamando = false;
bool cicloEmAndamento = false;  // Impede novas chamadas durante a travessia

void setup() {
  pinMode(13, OUTPUT);  // Vermelho
  pinMode(12, OUTPUT);  // Amarelo
  pinMode(11, OUTPUT);  // Verde
  pinMode(2, INPUT_PULLUP);  // Botão
}

void loop() {
  // Lê o estado do botão
  estadoBotao = digitalRead(2);
  
  // Detecta a transição HIGH → LOW (botão pressionado)
  if (estadoBotao == LOW && ultimoEstadoBotao == HIGH) {
    if (cicloEmAndamento == false) {  // Só ativa se não estiver em ciclo
      pedestreChamando = true;
    }
  }
  ultimoEstadoBotao = estadoBotao;
  
  // Verifica se o pedestre está chamando e não há ciclo em andamento
  if (pedestreChamando == true && cicloEmAndamento == false) {
    cicloEmAndamento = true;  // Marca o início do ciclo
    
    // --- PASSO 1: Mantém o verde por mais 3 segundos ---
    digitalWrite(11, HIGH);   // Verde aceso
    digitalWrite(12, LOW);
    digitalWrite(13, LOW);
    delay(3000);
    
    // --- PASSO 2: Amarelo (atenção) ---
    digitalWrite(11, LOW);
    digitalWrite(12, HIGH);   // Amarelo aceso
    digitalWrite(13, LOW);
    delay(3000);
    
    // --- PASSO 3: Vermelho (pedestre atravessa) ---
    digitalWrite(11, LOW);
    digitalWrite(12, LOW);
    digitalWrite(13, HIGH);   // Vermelho aceso
    delay(6000);              // Tempo para o pedestre atravessar
    
    // --- PASSO 4: Reseta o ciclo ---
    pedestreChamando = false;
    cicloEmAndamento = false;
  }
  
  // Estado normal: sempre verde
  digitalWrite(11, HIGH);   // Verde aceso
  digitalWrite(12, LOW);
  digitalWrite(13, LOW);
  
  delay(100);
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
                  <td><code>bool cicloEmAndamento = false;</code></td>
                  <td>Controla se o semáforo já está executando a travessia</td>
                </tr>
                <tr>
                  <td><code>if (estadoBotao == LOW && ultimoEstadoBotao == HIGH)</code></td>
                  <td>Detecta a transição do botão (evita múltiplos acionamentos)</td>
                </tr>
                <tr>
                  <td><code>if (cicloEmAndamento == false)</code></td>
                  <td>Ignora novas chamadas durante a travessia</td>
                </tr>
                <tr>
                  <td><code>delay(3000);</code></td>
                  <td>Mantém o verde por mais 3 segundos antes de mudar</td>
                </tr>
                <tr>
                  <td><code>delay(6000);</code></td>
                  <td>Tempo para o pedestre atravessar com segurança</td>
                </tr>
                <tr>
                  <td><code>cicloEmAndamento = false;</code></td>
                  <td>Libera o sistema para novas chamadas</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Adicione um LED de pedestre (vermelho/verde) que indica se o pedestre pode atravessar:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>LED <strong>Verde</strong> do pedestre aceso quando o semáforo está vermelho</li>
                <li>LED <strong>Vermelho</strong> do pedestre aceso quando o semáforo está verde</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`// Adicione 2 novos LEDs nos pinos 8 e 7
int pedestreVerde = 8;
int pedestreVermelho = 7;

void setup() {
  pinMode(8, OUTPUT);
  pinMode(7, OUTPUT);
  // ... resto do setup
}

// Dentro do ciclo:
// Quando o semáforo está VERDE:
digitalWrite(pedestreVermelho, HIGH);
digitalWrite(pedestreVerde, LOW);

// Quando o semáforo está VERMELHO:
digitalWrite(pedestreVermelho, LOW);
digitalWrite(pedestreVerde, HIGH);`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Por que usamos a variável <code>cicloEmAndamento</code>?</li>
              <li>O que acontece se o pedestre apertar o botão durante o ciclo?</li>
              <li>Qual a diferença entre este código e o da Aula 5?</li>
              <li>Como você faria para o semáforo esperar 2 segundos antes de mudar para o amarelo?</li>
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
              <label className="checklist-item">
                <input type="checkbox" /> O botão não funciona durante a travessia
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
                  <td>Botão aciona múltiplas vezes</td>
                  <td>Verifique a lógica de detecção de transição</td>
                </tr>
                <tr>
                  <td>Semáforo não volta ao verde</td>
                  <td>Confirme se <code>cicloEmAndamento = false</code> está definido</td>
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
          <a href="/intro/aula/6" className="btn-anterior">← Aula Anterior</a>
          <a href="/intro/aula/8" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula7;