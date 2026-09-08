import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula10.css';
import circuitoImg from '../../assets/imagens/aula10-servo-pot.png';
import LinkML from '../../components/LinkML';

function Aula10() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 10</span>
          </div>
          <h1>🎛️ Servo Motor com Potenciômetro</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 40 minutos</span>
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
              <li>Compreender o funcionamento do potenciômetro como sensor analógico</li>
              <li>Utilizar <code>analogRead()</code> para ler a posição do potenciômetro</li>
              <li>Aplicar a função <code>map()</code> para converter valores (0-1023 → 0-180)</li>
              <li>Controlar o servo motor proporcionalmente ao giro do potenciômetro</li>
            </ul>
          </section>

          {/* Como funciona */}
          <section className="aula-section teoria">
            <h2>🎛️ Como funciona o Potenciômetro?</h2>
            <div className="teoria-box">
              <div className="teoria-grid">
                <div className="teoria-item">
                  <span className="teoria-icone">🔄</span>
                  <h4>Potenciômetro</h4>
                  <p>Resistor variável</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">📊</span>
                  <h4>Leitura</h4>
                  <p>0 a 1023 (10 bits)</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">📐</span>
                  <h4>map()</h4>
                  <p>Converte 0-1023 → 0-180</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">⚙️</span>
                  <h4>Servo</h4>
                  <p>Segue o potenciômetro</p>
                </div>
              </div>
              <div className="teoria-explicacao">
                <p>
                  O potenciômetro é um resistor variável que, quando girado, altera a tensão no pino analógico.
                  O Arduino lê essa tensão como um valor entre 0 e 1023. Usamos a função <code>map()</code> 
                  para converter esse valor para o ângulo do servo (0 a 180 graus).
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
                <span className="material-emoji">🔄</span>
                <span>Servo Motor (SG90 ou similar)</span>
                <a href="https://meli.la/1LCDSnz" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="material-item">
                <span className="material-emoji">🎛️</span>
                <span>Potenciômetro 10kΩ</span>
                <a href="https://meli.la/1LCDSnz" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
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
  Arduino Uno          Servo Motor          Potenciômetro
  ┌─────────┐
  │         │          ┌──────────────┐    ┌──────────────┐
  │    5V   ├──────────┤ VCC          │    ├──────────────┤
  │   GND   ├──────────┤ GND          │    ├──────────────┤
  │     9   ├──────────┤ Sinal        │    │              │
  │    A0   ├──────────────────────────────────────┤         │
  │    5V   ├──────────────────────────────────────┤         │
  │   GND   ├──────────────────────────────────────┤         │
  └─────────┘          └──────────────┘    └──────────────┘
`}
              </pre>
            </div>
            
            <h3>📸 Foto do Circuito Montado</h3>
            <div className="foto-circuito">
              <div className="foto-placeholder">
                <img 
                  src={circuitoImg} 
                  alt="Circuito montado - Servo com potenciômetro"
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
                <strong>Conecte o servo motor</strong>
                <ul>
                  <li>Fio <strong>Vermelho</strong> → 5V</li>
                  <li>Fio <strong>Marrom</strong> → GND</li>
                  <li>Fio <strong>Laranja</strong> → pino <strong>9</strong></li>
                </ul>
              </li>
              <li>
                <strong>Conecte o potenciômetro</strong>
                <ul>
                  <li>Pino <strong>esquerdo</strong> → <strong>5V</strong></li>
                  <li>Pino <strong>central</strong> → pino <strong>A0</strong> (leitura analógica)</li>
                  <li>Pino <strong>direito</strong> → <strong>GND</strong></li>
                </ul>
              </li>
              <li>
                <strong style={{color: '#e94560'}}>⚠️ Atenção!</strong>
                <ul>
                  <li>O potenciômetro tem 3 terminais: GND, Sinal, VCC</li>
                  <li>O pino central é o que varia a resistência</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — Servo com Potenciômetro</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-servo-pot').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-servo-pot">
{`// Código para controlar um servo motor com potenciômetro
// Servo no pino 9, potenciômetro no pino A0

#include <Servo.h>  // Inclui a biblioteca do servo

Servo meuServo;     // Cria um objeto para controlar o servo

int pinoPot = A0;   // Pino do potenciômetro
int valorPot = 0;   // Valor lido do potenciômetro (0-1023)
int angulo = 0;     // Ângulo do servo (0-180)

void setup() {
  Serial.begin(9600);          // Inicia comunicação serial
  meuServo.attach(9);          // Conecta o servo ao pino 9
}

void loop() {
  // Lê o valor do potenciômetro (0 a 1023)
  valorPot = analogRead(pinoPot);
  
  // Converte o valor para ângulo (0 a 180)
  angulo = map(valorPot, 0, 1023, 0, 180);
  
  // Move o servo para o ângulo calculado
  meuServo.write(angulo);
  
  // Exibe os valores no monitor serial
  Serial.print("Potenciômetro: ");
  Serial.print(valorPot);
  Serial.print(" -> Ângulo: ");
  Serial.println(angulo);
  
  delay(15);  // Pequena pausa para estabilidade
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
                  <td><code>#include &lt;Servo.h&gt;</code></td>
                  <td>Inclui a biblioteca para controlar o servo</td>
                </tr>
                <tr>
                  <td><code>Servo meuServo;</code></td>
                  <td>Cria um objeto da classe Servo</td>
                </tr>
                <tr>
                  <td><code>analogRead(pinoPot);</code></td>
                  <td>Lê o valor do potenciômetro (0 a 1023)</td>
                </tr>
                <tr>
                  <td><code>map(valorPot, 0, 1023, 0, 180);</code></td>
                  <td>Converte 0-1023 para 0-180 graus</td>
                </tr>
                <tr>
                  <td><code>meuServo.write(angulo);</code></td>
                  <td>Move o servo para o ângulo calculado</td>
                </tr>
                <tr>
                  <td><code>delay(15);</code></td>
                  <td>Delay curto para suavizar o movimento</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Entendendo o map */}
          <section className="aula-section dica">
            <h2>📐 Entendendo a função map()</h2>
            <div className="dica-box">
              <p><strong>A função <code>map()</code> é uma das mais úteis no Arduino!</strong></p>
              <div className="dica-exemplo">
                <code>map(valor, de_menor, de_maior, para_menor, para_maior)</code>
              </div>
              <ul>
                <li><strong>Exemplo:</strong> <code>map(512, 0, 1023, 0, 180)</code> → <strong>90</strong></li>
                <li><strong>Exemplo:</strong> <code>map(1023, 0, 1023, 0, 180)</code> → <strong>180</strong></li>
                <li><strong>Exemplo:</strong> <code>map(0, 0, 1023, 0, 180)</code> → <strong>0</strong></li>
              </ul>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                💡 Use o Monitor Serial para ver os valores sendo convertidos em tempo real!
              </p>
            </div>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Modifique o código para inverter a direção:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Quando o potenciômetro estiver em 0 → servo em 180°</li>
                <li>Quando o potenciômetro estiver em 1023 → servo em 0°</li>
                <li>Dica: use <code>map()</code> de forma invertida</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`void loop() {
  valorPot = analogRead(pinoPot);
  
  // Inverte a direção: 0→180, 1023→0
  angulo = map(valorPot, 0, 1023, 180, 0);
  
  meuServo.write(angulo);
  
  Serial.print("Pot: ");
  Serial.print(valorPot);
  Serial.print(" -> Ângulo: ");
  Serial.println(angulo);
  
  delay(15);
}`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>O que acontece se você usar <code>map()</code> com valores invertidos?</li>
              <li>Por que usamos <code>delay(15)</code> no código?</li>
              <li>Como você faria para controlar dois servos com dois potenciômetros?</li>
              <li>Qual a diferença entre um potenciômetro e um LDR?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Conectei o servo (VCC, GND, Sinal no pino 9)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Conectei o potenciômetro (5V, A0, GND)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Usei a função <code>map()</code> para converter valores
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Abri o Monitor Serial para ver os valores
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O servo segue o potenciômetro! 🎛️🔄🎉
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
                  <td>Servo não se move</td>
                  <td>Verifique as conexões do servo (VCC, GND, Sinal)</td>
                </tr>
                <tr>
                  <td>Servo não se move</td>
                  <td>Confirme se o pino 9 está correto no código</td>
                </tr>
                <tr>
                  <td>Valor do potenciômetro não muda</td>
                  <td>Verifique as conexões do potenciômetro (5V, A0, GND)</td>
                </tr>
                <tr>
                  <td>Valor do potenciômetro não muda</td>
                  <td>Confirme se o pino central do potenciômetro está no A0</td>
                </tr>
                <tr>
                  <td>Servo treme</td>
                  <td>Aumente o <code>delay()</code> para 20 ou 30ms</td>
                </tr>
                <tr>
                  <td>Servo não vai até 0° ou 180°</td>
                  <td>Verifique se <code>map()</code> está com os valores corretos</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/intro/aula/9" className="btn-anterior">← Aula Anterior</a>
          <a href="/" className="btn-proximo">🚀 Concluir</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula10;