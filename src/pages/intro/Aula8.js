import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula8.css';
import circuitoImg from '../../assets/imagens/aula8-ldr.png';
import LinkML from '../../components/LinkML';

function Aula8() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 8</span>
          </div>
          <h1>🌅 Sensor de Luminosidade — LED que Acende no Escuro</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 45 minutos</span>
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
              <li>Entender o funcionamento do sensor LDR (fotoresistor)</li>
              <li>Aprender a usar entradas analógicas com <code>analogRead()</code></li>
              <li>Compreender o conceito de divisor de tensão</li>
              <li>Acender um LED automaticamente quando escurecer</li>
              <li>Ajustar a sensibilidade do sistema com um limiar (threshold)</li>
            </ul>
          </section>

          {/* Teoria do Sensor */}
          <section className="aula-section teoria">
            <h2>🌤️ Como funciona o Sensor LDR?</h2>
            <div className="teoria-box">
              <div className="teoria-grid">
                <div className="teoria-item">
                  <span className="teoria-icone">☀️</span>
                  <h4>Com luz</h4>
                  <p>Resistência BAIXA</p>
                  <p className="teoria-valor">~10Ω a 100Ω</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">🌙</span>
                  <h4>Sem luz</h4>
                  <p>Resistência ALTA</p>
                  <p className="teoria-valor">~1MΩ a 10MΩ</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">📊</span>
                  <h4>Leitura analógica</h4>
                  <p>Valor: 0 a 1023</p>
                  <p className="teoria-valor">Claro: 700-1023</p>
                  <p className="teoria-valor">Escuro: 0-300</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">⚡</span>
                  <h4>Divisor de tensão</h4>
                  <p>LDR + Resistor 10kΩ</p>
                  <p className="teoria-valor">Converte resistência em tensão</p>
                </div>
              </div>
              <div className="teoria-explicacao">
                <p>
                  O LDR (Light Dependent Resistor) é um resistor que muda sua resistência conforme a luz. 
                  Em ambientes claros sua resistência é baixa, e no escuro é alta. 
                  Usamos um divisor de tensão com um resistor de 10kΩ para converter essa variação em um sinal que o Arduino pode ler.
                </p>
              </div>
            </div>
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
                <span>Resistor 10kΩ (para o LDR)</span>
                <a href="https://meli.la/1gSceXs" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🌤️</span>
                <span>Sensor LDR (fotoresistor)</span>
                <a href="https://meli.la/2fZqm41" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
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

          {/* Circuito */}
          <section className="aula-section circuito">
            <h2>📐 Esquema do Circuito</h2>
            <div className="circuito-diagrama">
              <pre className="ascii-diagram">
{`
  Arduino Uno              Protoboard
  ┌─────────┐
  │         │              ┌──────────────┐
  │    5V   ├──────────────┤ 5V           │
  │    A0   ├──────────────┤ o───────┐   │
  │         │              │         │   │
  │   GND   ├──────────────┤ GND     │   │
  │         │              │         │   │
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
                  alt="Circuito montado - Sensor de luminosidade com LED"
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
                <strong>Monte o circuito do LDR (divisor de tensão)</strong>
                <ul>
                  <li>Uma perna do LDR → <strong>5V</strong></li>
                  <li>Outra perna do LDR → pino <strong>A0</strong> E também → resistor 10kΩ → <strong>GND</strong></li>
                  <li><strong style={{color: '#e94560'}}>⚠️ O resistor 10kΩ vai do pino A0 até o GND</strong></li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — Sensor de Luminosidade</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-ldr').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-ldr">
{`// Código para Sensor de Luminosidade (LDR)
// LED no pino 13, LDR no pino A0

int ldrPin = A0;        // Pino analógico do LDR
int ledPin = 13;        // Pino do LED
int limiar = 500;       // Valor para considerar "escuro" (ajuste conforme necessário)

void setup() {
  Serial.begin(9600);           // Inicia comunicação serial
  pinMode(ledPin, OUTPUT);      // LED como saída
}

void loop() {
  // Lê o valor do LDR (0 a 1023)
  int valorLDR = analogRead(ldrPin);
  
  // Exibe no monitor serial
  Serial.print("Luminosidade: ");
  Serial.print(valorLDR);
  Serial.print(" - ");
  
  // Verifica se está escuro
  if (valorLDR < limiar) {
    digitalWrite(ledPin, HIGH);   // Acende o LED
    Serial.println("🌙 ESCURO - LED ACESO");
  } else {
    digitalWrite(ledPin, LOW);    // Apaga o LED
    Serial.println("☀️ CLARO - LED APAGADO");
  }
  
  delay(200);  // Pequena pausa para estabilidade
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
                  <td><code>int ldrPin = A0;</code></td>
                  <td>Define o pino analógico onde o LDR está conectado</td>
                </tr>
                <tr>
                  <td><code>int limiar = 500;</code></td>
                  <td>Valor que define o limite entre "claro" e "escuro"</td>
                </tr>
                <tr>
                  <td><code>analogRead(ldrPin);</code></td>
                  <td>Lê o valor analógico do LDR (0 a 1023)</td>
                </tr>
                <tr>
                  <td><code>if (valorLDR &lt; limiar)</code></td>
                  <td>Verifica se o valor está abaixo do limiar (escuro)</td>
                </tr>
                <tr>
                  <td><code>digitalWrite(ledPin, HIGH);</code></td>
                  <td>Acende o LED quando está escuro</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Como ajustar */}
          <section className="aula-section dica">
            <h2>🎛️ Como Ajustar a Sensibilidade</h2>
            <div className="dica-box">
              <p><strong>O valor do limiar depende do ambiente:</strong></p>
              <ul>
                <li><strong>Ambiente muito claro:</strong> Aumente o limiar (ex: 600-700)</li>
                <li><strong>Ambiente escuro:</strong> Diminua o limiar (ex: 300-400)</li>
                <li><strong>Dica:</strong> Abra o Monitor Serial e veja os valores do LDR</li>
                <li>Ajuste o <code>limiar</code> até encontrar o ponto ideal</li>
              </ul>
              <div className="dica-exemplo">
                <code>int limiar = 450;  // Ajuste este valor!</code>
              </div>
            </div>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Faça o LED acender gradualmente conforme escurece:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Use <code>analogWrite()</code> para controlar a intensidade do LED</li>
                <li>Conforme o LDR indica menos luz, o LED fica mais forte</li>
                <li>Use <code>map()</code> para converter o valor do LDR</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int valorLDR = analogRead(ldrPin);
  
  // Inverte o valor: quanto mais escuro, maior a intensidade
  int intensidade = map(valorLDR, 0, 1023, 255, 0);
  intensidade = constrain(intensidade, 0, 255);
  
  analogWrite(ledPin, intensidade);  // LED com intensidade variável
  
  Serial.print("Luz: ");
  Serial.print(valorLDR);
  Serial.print(" - Intensidade: ");
  Serial.println(intensidade);
  
  delay(100);
}`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Por que usamos um resistor de 10kΩ junto com o LDR?</li>
              <li>Qual a diferença entre <code>analogRead()</code> e <code>digitalRead()</code>?</li>
              <li>O que acontece se você trocar o resistor de 10kΩ por um de 1kΩ?</li>
              <li>Como você faria para o LED acender quando estiver claro?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Conectei o LDR com divisor de tensão (5V, A0, 10kΩ, GND)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Conectei o LED com resistor de 220Ω no pino 13
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Abri o Monitor Serial para ver os valores
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Ajustei o <code>limiar</code> para o meu ambiente
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O LED acende quando escurece! 🌅🎉
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
                  <td>Verifique a polaridade do LED</td>
                </tr>
                <tr>
                  <td>LED não acende</td>
                  <td>Confirme se o resistor de 220Ω está conectado</td>
                </tr>
                <tr>
                  <td>Valor do LDR não muda</td>
                  <td>Verifique as conexões do LDR (5V, A0, 10kΩ, GND)</td>
                </tr>
                <tr>
                  <td>Valor do LDR não muda</td>
                  <td>Confirme se o resistor de 10kΩ está conectado ao GND</td>
                </tr>
                <tr>
                  <td>LED acende/desliga muito rápido</td>
                  <td>Adicione um <code>delay(200)</code> no final do loop</td>
                </tr>
                <tr>
                  <td>LED não reage ao escuro</td>
                  <td>Ajuste o valor do <code>limiar</code> no código</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/intro/aula/7" className="btn-anterior">← Aula Anterior</a>
          <a href="/intro/aula/9" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula8;