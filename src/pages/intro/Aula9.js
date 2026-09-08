import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula9.css';
import circuitoImg from '../../assets/imagens/aula9-servo.png';
import LinkML from '../../components/LinkML';

function Aula9() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/modulos">Módulo 1</a> &gt; <span>Aula 9</span>
          </div>
          <h1>🔄 Servo Motor — Movimento 0° a 180°</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Módulo 1: Introdução à Robótica</span>
            <span className="aula-duracao">⏱️ 30 minutos</span>
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
              <li>Conhecer o funcionamento de um servo motor</li>
              <li>Aprender a usar a biblioteca <code>Servo.h</code></li>
              <li>Controlar o ângulo do servo com <code>servo.write()</code></li>
              <li>Movimentar o servo entre 0° e 180° com intervalo de 2 segundos</li>
            </ul>
          </section>

          {/* Como funciona o Servo */}
          <section className="aula-section teoria">
            <h2>🔄 Como funciona o Servo Motor?</h2>
            <div className="teoria-box">
              <div className="teoria-grid">
                <div className="teoria-item">
                  <span className="teoria-icone">⚙️</span>
                  <h4>Servo Motor</h4>
                  <p>Motor com controle preciso de posição</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">📏</span>
                  <h4>Ângulo</h4>
                  <p>Geralmente de 0° a 180°</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">🔄</span>
                  <h4>Controle</h4>
                  <p>Sinal PWM no pino de controle</p>
                </div>
                <div className="teoria-item">
                  <span className="teoria-icone">📦</span>
                  <h4>Biblioteca</h4>
                  <p>Servo.h (já vem com o Arduino)</p>
                </div>
              </div>
              <div className="teoria-explicacao">
                <p>
                  O servo motor permite controlar a posição de um eixo com precisão. 
                  Diferente de um motor comum, o servo vai para uma posição específica 
                  e mantém essa posição. Usamos a biblioteca <code>Servo.h</code> para 
                  controlar facilmente o ângulo entre 0° e 180°.
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
                <span className="material-emoji">🔗</span>
                <span>Jumpers (macho-macho) 3x</span>
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
  Arduino Uno          Servo Motor
  ┌─────────┐
  │         │          ┌──────────────┐
  │    5V   ├──────────┤ Vermelho (VCC)│
  │   GND   ├──────────┤ Marrom (GND)  │
  │     9   ├──────────┤ Laranja (Sinal)│
  └─────────┘          └──────────────┘
`}
              </pre>
            </div>
            
            <h3>📸 Foto do Circuito Montado</h3>
            <div className="foto-circuito">
              <div className="foto-placeholder">
                <img 
                  src={circuitoImg} 
                  alt="Circuito montado - Servo motor no Arduino"
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
                <strong>Identifique os fios do servo</strong>
                <ul>
                  <li><strong style={{color: '#e94560'}}>Vermelho</strong> → 5V (alimentação)</li>
                  <li><strong style={{color: '#8b4513'}}>Marrom</strong> → GND (terra)</li>
                  <li><strong style={{color: '#e67e22'}}>Laranja</strong> → Sinal (pino 9)</li>
                </ul>
              </li>
              <li>
                <strong>Conecte os jumpers</strong>
                <ul>
                  <li>Fio <strong>Vermelho</strong> do servo → <strong>5V</strong> do Arduino</li>
                  <li>Fio <strong>Marrom</strong> do servo → <strong>GND</strong> do Arduino</li>
                  <li>Fio <strong>Laranja</strong> do servo → pino <strong>9</strong></li>
                </ul>
              </li>
              <li>
                <strong style={{color: '#e94560'}}>⚠️ Atenção!</strong>
                <ul>
                  <li>Nunca conecte o servo diretamente ao pino de 5V do Arduino se ele consumir muita corrente</li>
                  <li>Para motores maiores, use uma fonte externa</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Código */}
          <section className="aula-section codigo">
            <h2>💻 Código — Servo Motor 0° a 180°</h2>
            <div className="codigo-container">
              <div className="codigo-header">
                <span className="codigo-linguagem">Arduino C++</span>
                <button className="btn-copiar" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('codigo-servo').textContent);
                  alert('Código copiado! 📋');
                }}>
                  📋 Copiar código
                </button>
              </div>
              <pre className="codigo-pre" id="codigo-servo">
{`// Código para movimentar um servo motor de 0° a 180°
// Servo conectado no pino 9

#include <Servo.h>  // Inclui a biblioteca do servo

Servo meuServo;     // Cria um objeto para controlar o servo

void setup() {
  meuServo.attach(9);  // Conecta o servo ao pino 9
}

void loop() {
  meuServo.write(0);    // Move o servo para 0°
  delay(2000);          // Aguarda 2 segundos
  
  meuServo.write(180);  // Move o servo para 180°
  delay(2000);          // Aguarda 2 segundos
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
                  <td>Inclui a biblioteca que permite controlar o servo</td>
                </tr>
                <tr>
                  <td><code>Servo meuServo;</code></td>
                  <td>Cria um objeto da classe Servo chamado "meuServo"</td>
                </tr>
                <tr>
                  <td><code>meuServo.attach(9);</code></td>
                  <td>Conecta o servo ao pino 9</td>
                </tr>
                <tr>
                  <td><code>meuServo.write(0);</code></td>
                  <td>Envia o servo para a posição 0°</td>
                </tr>
                <tr>
                  <td><code>meuServo.write(180);</code></td>
                  <td>Envia o servo para a posição 180°</td>
                </tr>
                <tr>
                  <td><code>delay(2000);</code></td>
                  <td>Aguarda 2 segundos entre os movimentos</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Faça o servo se mover para 5 posições diferentes com intervalos de 1 segundo:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>0° → 45° → 90° → 135° → 180° → 0°</li>
                <li>Delay de 1 segundo entre cada posição</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`void loop() {
  meuServo.write(0);
  delay(1000);
  
  meuServo.write(45);
  delay(1000);
  
  meuServo.write(90);
  delay(1000);
  
  meuServo.write(135);
  delay(1000);
  
  meuServo.write(180);
  delay(1000);
}`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>O que acontece se você usar <code>meuServo.write(90)</code>?</li>
              <li>Quantos graus o servo consegue girar no total?</li>
              <li>Por que precisamos da biblioteca Servo.h?</li>
              <li>O que acontece se você usar um delay muito curto entre os movimentos?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Conectei o servo ao Arduino (VCC, GND, Sinal)
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Usei o pino 9 para o sinal
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Incluí a biblioteca Servo.h no código
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Carreguei o código no Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> O servo se moveu de 0° a 180°! 🔄🎉
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
                  <td>Verifique as conexões (VCC, GND e Sinal)</td>
                </tr>
                <tr>
                  <td>Servo não se move</td>
                  <td>Confirme se o pino 9 está correto no código</td>
                </tr>
                <tr>
                  <td>Servo não se move</td>
                  <td>Verifique se a biblioteca Servo.h está incluída</td>
                </tr>
                <tr>
                  <td>Servo treme ou vibra</td>
                  <td>Pode ser falta de corrente - tente outra fonte USB</td>
                </tr>
                <tr>
                  <td>Servo não vai até 180°</td>
                  <td>Alguns servos têm alcance menor - use 0° a 90° para teste</td>
                </tr>
                <tr>
                  <td>Servo trava</td>
                  <td>Não force o eixo manualmente - pode danificar o motor</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/intro/aula/8" className="btn-anterior">← Aula Anterior</a>
          <a href="/intro/aula/10" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula9;