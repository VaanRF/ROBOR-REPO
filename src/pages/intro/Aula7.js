import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula7.css';
import circuitoImg from '../../assets/imagens/aula6-ultrassonico.png';

function Aula7() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/intro">Módulo 1</a> &gt; <span>Aula 7</span>
          </div>
          <h1>🚦 Semáforo Inteligente com Sensor Ultrassônico</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 50 minutos</span>
            <span className="aula-nivel">🌱 Intermediário / Avançado</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Kit Básico - Link Afiliado */}
          <section className="aula-section kit-destaque">
            <div className="kit-box">
              <span className="kit-icone">🧰</span>
              <div className="kit-info">
                <h3>🎯 Kit Básico de Robótica com Arduino</h3>
                <p>Tenha todos os componentes para acompanhar as aulas!</p>
                <a 
                  href="https://meli.la/1a49knY" 
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

          {/* Objetivos */}
          <section className="aula-section objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
              <li>Substituir o botão pelo sensor ultrassônico para detecção automática</li>
              <li>Compreender o conceito de <strong>máquina de estados</strong> com sensor</li>
              <li>Manter o sinal verde até que um pedestre seja detectado</li>
              <li>Executar o ciclo completo: Verde → Amarelo → Vermelho → Verde</li>
              <li>Ignorar novas detecções durante a travessia</li>
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
                <span className="material-emoji">📡</span>
                <span>Sensor Ultrassônico HC-SR04</span>
                <a href="#" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🧱</span>
                <span>Protoboard</span>
                <a href="https://meli.la/2XCst25" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🔗</span>
                <span>Jumpers (macho-macho) 8x</span>
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
  Arduino Uno              Sensor HC-SR04
  ┌─────────┐
  │         │              ┌──────────────┐
  │    5V   ├──────────────┤ VCC          │
  │   GND   ├──────────────┤ GND          │
  │     9   ├──────────────┤ TRIG         │
  │    10   ├──────────────┤ ECHO         │
  │    13   ├──────────────┤ o───[R]───o│  ← LED Vermelho
  │    12   ├──────────────┤ o───[R]───o│  ← LED Amarelo
  │    11   ├──────────────┤ o───[R]───o│  ← LED Verde
  └─────────┘              └──────────────┘
`}
              </pre>
            </div>
            
            <h3>📸 Foto do Circuito Montado</h3>
            <div className="foto-circuito">
              <div className="foto-placeholder">
                <img 
                  src={circuitoImg} 
                  alt="Circuito montado - Semáforo com sensor ultrassônico"
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
                <strong>Conecte o sensor ultrassônico</strong>
                <ul>
                  <li><strong>VCC</strong> → 5V do Arduino</li>
                  <li><strong>GND</strong> → GND do Arduino</li>
                  <li><strong>TRIG</strong> → pino <strong>9</strong></li>
                  <li><strong>ECHO</strong> → pino <strong>10</strong></li>
                </ul>
              </li>
              <li>
                <strong>Monte os LEDs na protoboard</strong>
                <ul>
                  <li>LED Vermelho: ânodo → resistor 220Ω → pino <strong>13</strong></li>
                  <li>LED Amarelo: ânodo → resistor 220Ω → pino <strong>12</strong></li>
                  <li>LED Verde: ânodo → resistor 220Ω → pino <strong>11</strong></li>
                  <li>Cátodos de todos os LEDs → GND</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — Semáforo com Sensor de Proximidade</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-semaforo-proximidade').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-semaforo-proximidade">
{`// Código para Semáforo com Sensor de Proximidade (Ultrassônico)
// LED Vermelho: pino 13, Amarelo: pino 12, Verde: pino 11
// TRIG: pino 9, ECHO: pino 10

int trigPin = 9;
int echoPin = 10;
int distanciaLimite = 30;  // Distância em cm para detectar o pedestre
bool pedestreDetectado = false;
bool cicloEmAndamento = false;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(13, OUTPUT);  // Vermelho
  pinMode(12, OUTPUT);  // Amarelo
  pinMode(11, OUTPUT);  // Verde
}

long medirDistancia() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duracao = pulseIn(echoPin, HIGH);
  return duracao * 0.034 / 2;
}

void loop() {
  int distancia = medirDistancia();
  
  // Mostra a distância no monitor serial
  Serial.print("Distância: ");
  Serial.print(distancia);
  Serial.println(" cm");
  
  // Detecta se alguém está próximo (distância < limite E > 0)
  if (distancia > 0 && distancia < distanciaLimite) {
    if (cicloEmAndamento == false) {  // Só ativa se não estiver em ciclo
      pedestreDetectado = true;
      Serial.println("Pedestre detectado!");
    }
  }
  
  // Verifica se o pedestre foi detectado e não há ciclo em andamento
  if (pedestreDetectado == true && cicloEmAndamento == false) {
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
    pedestreDetectado = false;
    cicloEmAndamento = false;
    Serial.println("Ciclo finalizado - voltando ao verde");
  }
  
  // Estado normal: sempre verde
  digitalWrite(11, HIGH);   // Verde aceso
  digitalWrite(12, LOW);
  digitalWrite(13, LOW);
  
  delay(200);
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
                  <td><code>int distanciaLimite = 30;</code></td>
                  <td>Define a distância máxima (em cm) para detectar o pedestre</td>
                </tr>
                <tr>
                  <td><code>bool cicloEmAndamento = false;</code></td>
                  <td>Controla se o semáforo já está executando a travessia</td>
                </tr>
                <tr>
                  <td><code>long medirDistancia()</code></td>
                  <td>Função que calcula a distância usando o sensor ultrassônico</td>
                </tr>
                <tr>
                  <td><code>if (distancia > 0 && distancia &lt; distanciaLimite)</code></td>
                  <td>Verifica se alguém está próximo ao sensor</td>
                </tr>
                <tr>
                  <td><code>if (cicloEmAndamento == false)</code></td>
                  <td>Ignora novas detecções durante a travessia</td>
                </tr>
                <tr>
                  <td><code>delay(3000);</code></td>
                  <td>Mantém o verde por mais 3 segundos antes de mudar</td>
                </tr>
                <tr>
                  <td><code>delay(6000);</code></td>
                  <td>Tempo para o pedestre atravessar com segurança</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Modifique o código para que o semáforo só detecte o pedestre se ele ficar parado por mais de 2 segundos:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Use uma variável <code>tempoDetectado</code> para contar o tempo</li>
                <li>Só ative <code>pedestreDetectado = true</code> após 2 segundos</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`unsigned long tempoInicio = 0;
bool pessoaProxima = false;

void loop() {
  int distancia = medirDistancia();
  
  if (distancia > 0 && distancia < distanciaLimite) {
    if (pessoaProxima == false) {
      pessoaProxima = true;
      tempoInicio = millis();
    }
  } else {
    pessoaProxima = false;
  }
  
  if (pessoaProxima == true && (millis() - tempoInicio) >= 2000) {
    if (cicloEmAndamento == false) {
      pedestreDetectado = true;
    }
  }
  // ... resto do código
}`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Qual a vantagem de usar o sensor ultrassônico em vez do botão?</li>
              <li>O que acontece se o pedestre ficar parado na frente do sensor?</li>
              <li>Como você faria para o semáforo detectar pedestres a diferentes distâncias?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Conectei o sensor ultrassônico (VCC, GND, TRIG, ECHO)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Conectei os 3 LEDs com seus resistores
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Usei os pinos 13, 12, 11, 9 e 10
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Abri o Monitor Serial para ver as distâncias
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O semáforo muda quando coloco a mão perto! 🚦📡🎉
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
                  <td>Sensor não detecta</td>
                  <td>Verifique as conexões do TRIG (pino 9) e ECHO (pino 10)</td>
                </tr>
                <tr>
                  <td>Sensor não detecta</td>
                  <td>Confirme se o VCC está no 5V (não 3.3V)</td>
                </tr>
                <tr>
                  <td>Semáforo muda sozinho</td>
                  <td>Ajuste o <code>distanciaLimite</code> para um valor menor</td>
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