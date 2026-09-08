import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula6.css';
import circuitoImg from '../../assets/imagens/aula6-ultrassonico.png';
import LinkML from '../../components/LinkML';

function Aula6() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 6</span>
          </div>
          <h1>📡 Sensor Ultrassônico — LED com Proximidade</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 50 minutos</span>
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
              <li>Entender o funcionamento do sensor ultrassônico HC-SR04</li>
              <li>Aprender a medir distâncias usando <code>pulseIn()</code></li>
              <li>Calcular a distância em centímetros a partir do tempo de eco</li>
              <li>Acender um LED quando a mão estiver próxima ao sensor</li>
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
                <span className="material-emoji">📡</span>
                <span>Sensor Ultrassônico HC-SR04</span>
                <a href="https://meli.la/1bsciLp" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🧱</span>
                <span>Protoboard</span>
                <a href="https://meli.la/2XCst25" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🔗</span>
                <span>Jumpers (macho-macho) 6x</span>
                <a href="https://meli.la/1Z2uybk" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🔌</span>
                <span>Cabo USB</span>
                <a href="https://meli.la/1Quo84H" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
            </div>
          </section>

          {/* Teoria do Sensor */}
          <section className="aula-section teoria">
            <h2>📡 Como funciona o Sensor Ultrassônico?</h2>
            <div className="teoria-box">
              <div className="teoria-grid">
                <div className="teoria-item">
                  <span className="teoria-icone">📤</span>
                  <h4>Trigger (Gatilho)</h4>
                  <p>Envia um pulso ultrassônico de 10µs</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">📥</span>
                  <h4>Echo (Eco)</h4>
                  <p>Recebe o som refletido de volta</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">⏱️</span>
                  <h4>pulseIn()</h4>
                  <p>Mede o tempo entre o envio e o retorno</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">📏</span>
                  <h4>Fórmula</h4>
                  <p>Distância = (tempo × 0,034) / 2</p>
                </div>
              </div>
              <div className="teoria-explicacao">
                <p>
                  O sensor envia uma onda sonora inaudível e mede o tempo que ela leva para voltar.
                  Com a velocidade do som (343 m/s), calculamos a distância até o objeto.
                </p>
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
  │     9   ├──────────────┤ TRIG (Trigger)│
  │    10   ├──────────────┤ ECHO (Echo)  │
  │    13   ├──────────────┤ o───[R]───o│  ← LED
  └─────────┘              └──────────────┘
`}
              </pre>
            </div>
            
            <h3>📸 Foto do Circuito Montado</h3>
            <div className="foto-circuito">
              <div className="foto-placeholder">
                <img 
                  src={circuitoImg} 
                  alt="Circuito montado - Sensor ultrassônico com LED"
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
                <strong>Monte o circuito do LED</strong>
                <ul>
                  <li>Ânodo (perna longa) → resistor 220Ω → pino <strong>13</strong></li>
                  <li>Cátodo (perna curta) → GND</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — Sensor Ultrassônico com LED</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-ultrassonico').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-ultrassonico">
{`// Código para Sensor Ultrassônico com LED de proximidade
// LED no pino 13, TRIG no pino 9, ECHO no pino 10

int trigPin = 9;    // Pino do Trigger (envio)
int echoPin = 10;   // Pino do Echo (recepção)
int ledPin = 13;    // Pino do LED
int distanciaLimite = 20;  // Distância em cm para acender o LED

void setup() {
  Serial.begin(9600);          // Inicia comunicação serial
  pinMode(trigPin, OUTPUT);    // Trigger como saída
  pinMode(echoPin, INPUT);     // Echo como entrada
  pinMode(ledPin, OUTPUT);     // LED como saída
}

void loop() {
  // Limpa o trigger
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Envia o pulso ultrassônico
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Lê o tempo do eco (em microssegundos)
  long duracao = pulseIn(echoPin, HIGH);
  
  // Calcula a distância em centímetros
  int distancia = duracao * 0.034 / 2;
  
  // Exibe no monitor serial
  Serial.print("Distância: ");
  Serial.print(distancia);
  Serial.println(" cm");
  
  // Verifica se a mão está próxima (distância < limite)
  if (distancia > 0 && distancia < distanciaLimite) {
    digitalWrite(ledPin, HIGH);  // Acende o LED
    Serial.println("LED ACESO - Mão detectada!");
  } else {
    digitalWrite(ledPin, LOW);   // Apaga o LED
  }
  
  delay(200);  // Pequena pausa
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
                  <td><code>int trigPin = 9;</code></td>
                  <td>Define o pino que envia o pulso ultrassônico</td>
                </tr>
                <tr>
                  <td><code>int echoPin = 10;</code></td>
                  <td>Define o pino que recebe o eco</td>
                </tr>
                <tr>
                  <td><code>pulseIn(echoPin, HIGH);</code></td>
                  <td>Mede o tempo do pulso de retorno (em µs)</td>
                </tr>
                <tr>
                  <td><code>duracao * 0.034 / 2;</code></td>
                  <td>Calcula a distância: (tempo × velocidade do som) / 2</td>
                </tr>
                <tr>
                  <td><code>distancia > 0 && distancia &lt; distanciaLimite</code></td>
                  <td>Verifica se a mão está próxima (entre 0 e 20cm)</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Faça o LED acender em duas distâncias diferentes:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li><strong>Até 10cm</strong> → LED pisca rápido (100ms)</li>
                <li><strong>Entre 10cm e 20cm</strong> → LED pisca devagar (500ms)</li>
                <li><strong>Acima de 20cm</strong> → LED apagado</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duracao = pulseIn(echoPin, HIGH);
  int distancia = duracao * 0.034 / 2;
  
  if (distancia > 0 && distancia <= 10) {
    digitalWrite(ledPin, HIGH);
    delay(100);
    digitalWrite(ledPin, LOW);
    delay(100);
  } else if (distancia > 10 && distancia <= 20) {
    digitalWrite(ledPin, HIGH);
    delay(500);
    digitalWrite(ledPin, LOW);
    delay(500);
  } else {
    digitalWrite(ledPin, LOW);
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
              <li>Por que dividimos o tempo por 2 no cálculo da distância?</li>
              <li>O que acontece se o objeto estiver a mais de 400cm?</li>
              <li>Como você faria para medir distâncias em polegadas?</li>
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
                <input type="checkbox" /> Conectei o LED com resistor de 220Ω
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Usei os pinos 9, 10 e 13
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Abri o Monitor Serial para ver as distâncias
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O LED acende quando coloco a mão perto! 📡🎉
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
                  <td>Distância sempre 0</td>
                  <td>Verifique as conexões do TRIG e ECHO</td>
                </tr>
                <tr>
                  <td>Distância sempre 0</td>
                  <td>Confirme se os pinos 9 e 10 estão corretos no código</td>
                </tr>
                <tr>
                  <td>LED não acende</td>
                  <td>Verifique a polaridade do LED</td>
                </tr>
                <tr>
                  <td>LED não acende</td>
                  <td>Ajuste o <code>distanciaLimite</code> para um valor maior</td>
                </tr>
                <tr>
                  <td>Leitura instável</td>
                  <td>Adicione um <code>delay(200)</code> no final do loop</td>
                </tr>
                <tr>
                  <td>Sensor não funciona</td>
                  <td>Confirme se o VCC está no 5V (não 3.3V)</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/intro/aula/5" className="btn-anterior">← Aula Anterior</a>
          <a href="/intro/aula/7" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula6;