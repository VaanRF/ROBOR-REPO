import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula4.css';

function Aula4() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/eletronica">Eletrônica Básica</a> &gt; <span>Aula 4</span>
          </div>
          <h1>🔌 Componentes Ativos</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Eletrônica Básica</span>
            <span className="aula-duracao">⏱️ 35 minutos</span>
            <span className="aula-nivel">🌱 Iniciante</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Introdução */}
          <section className="aula-section introducao">
            <h2>⚡ O que são Componentes Ativos?</h2>
            <p>
              Componentes ativos são aqueles que <strong>controlam o fluxo de eletricidade</strong>
              e podem <strong>amplificar sinais</strong> ou <strong>gerar energia</strong>.
              Diferente dos passivos, eles precisam de energia para funcionar.
            </p>
            <div className="ativos-grid">
              <div className="ativo-item">
                <span className="ativo-icone">🔽</span>
                <h4>Transistor</h4>
                <p>Amplifica e chaveia sinais</p>
              </div>
              <div className="ativo-item">
                <span className="ativo-icone">➡️</span>
                <h4>Diodo</h4>
                <p>Permite corrente em um só sentido</p>
              </div>
            </div>
          </section>

          {/* Diodo */}
          <section className="aula-section diodo">
            <h2>➡️ Diodo</h2>
            <p>
              O <strong>diodo</strong> é um componente que permite a passagem de corrente
              elétrica em <strong>apenas uma direção</strong>. É como uma "porta de mão única"
              para os elétrons.
            </p>

            <div className="componente-box">
              <div className="componente-simbolo">
                <h4>Símbolo</h4>
                <pre className="simbolo-pre">
{`───[▶|]───`}
                </pre>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.3rem' }}>
                  A seta aponta para o sentido da corrente
                </p>
              </div>
              <div className="componente-info">
                <h4>Características</h4>
                <ul>
                  <li><strong>Função:</strong> Deixa a corrente passar em um só sentido</li>
                  <li><strong>Polaridade:</strong> Ânodo (+) e Cátodo (-)</li>
                  <li><strong>Queda de tensão:</strong> ~0,7V (diodo de silício)</li>
                  <li><strong>Aplicações:</strong> Retificação, proteção, detecção</li>
                </ul>
              </div>
            </div>

            <div className="diodo-polaridade">
              <h4>🔌 Identificando a Polaridade do Diodo</h4>
              <div className="polaridade-grid">
                <div className="polaridade-item">
                  <span className="polaridade-icone">➕</span>
                  <h5>Ânodo (Positivo)</h5>
                  <ul>
                    <li>Lado <strong>sem</strong> a faixa</li>
                  </ul>
                </div>
                <div className="polaridade-item">
                  <span className="polaridade-icone">➖</span>
                  <h5>Cátodo (Negativo)</h5>
                  <ul>
                    <li>Lado com uma <strong>faixa</strong> (geralmente cinza ou preta)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="diodo-aplicacao">
              <h4>📝 Aplicação: Proteção contra inversão de polaridade</h4>
              <p>
                Um diodo pode ser colocado em série com a fonte de alimentação para
                <strong> proteger o circuito</strong> se a bateria for ligada ao contrário.
              </p>
              <div className="esquema-box">
                <pre className="ascii-diagram">
{`
  Bateria  ──[▶|]──  Circuito
  9V
`}
                </pre>
              </div>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                Se a bateria for ligada invertida, o diodo bloqueia a corrente e protege o circuito.
              </p>
            </div>
          </section>

          {/* Transistor */}
          <section className="aula-section transistor">
            <h2>🔽 Transistor</h2>
            <p>
              O <strong>transistor</strong> é um dos componentes mais importantes da eletrônica.
              Ele pode <strong>amplificar sinais</strong> ou atuar como uma
              <strong> chave eletrônica</strong>, ligando e desligando cargas maiores
              com um pequeno sinal de controle.
            </p>

            <div className="transistor-tipos">
              <h4>Tipos de Transistor</h4>
              <div className="tipos-grid">
                <div className="tipo-item">
                  <span className="tipo-icone">🔵</span>
                  <h5>NPN</h5>
                  <p>Mais comum, controla corrente positiva</p>
                  <span className="tipo-exemplo">Ex: BC547, TIP120</span>
                </div>
                <div className="tipo-item">
                  <span className="tipo-icone">🔴</span>
                  <h5>PNP</h5>
                  <p>Controla corrente negativa</p>
                  <span className="tipo-exemplo">Ex: BC557</span>
                </div>
              </div>
            </div>

            <div className="componente-box">
              <div className="componente-simbolo">
                <h4>Símbolo (NPN)</h4>
                <pre className="simbolo-pre">
{`
     C (Coletor)
     │
  ───┤  B (Base)
     │
     E (Emissor)
`}
                </pre>
              </div>
              <div className="componente-info">
                <h4>Características</h4>
                <ul>
                  <li><strong>Função:</strong> Chave ou amplificador</li>
                  <li><strong>3 Terminais:</strong> Base (B), Coletor (C), Emissor (E)</li>
                  <li><strong>Corrente na base:</strong> Pequena (~1mA) controla corrente no coletor (~100mA)</li>
                  <li><strong>Aplicações:</strong> Motores, LEDs, relés, amplificadores</li>
                </ul>
              </div>
            </div>

            <div className="transistor-chave">
              <h4>🔌 Transistor como Chave</h4>
              <p>
                O uso mais comum do transistor no Arduino é como <strong>chave eletrônica</strong>:
                um pino do Arduino controla a base do transistor, que liga ou desliga
                uma carga maior (motor, LED de alta potência, etc.).
              </p>

              <div className="esquema-box">
                <pre className="ascii-diagram">
{`
  Arduino             Transistor NPN
  ┌─────────┐
  │    9    ├──────── Resistor 1kΩ ── Base
  │         │                         │
  │   GND   ├───────────────────────── Emissor
  │         │                         │
  │   5V    ├───────────────────────── Coletor
  └─────────┘                         │
                                      │
                                  ┌───v───┐
                                  │ Motor │
                                  │  DC   │
                                  └───────┘
`}
                </pre>
              </div>

              <div className="transistor-atencao">
                <p>
                  ⚠️ <strong>Importante:</strong> O transistor precisa de um <strong>resistor</strong>
                  na base (geralmente 1kΩ) para limitar a corrente e proteger o pino do Arduino.
                </p>
              </div>
            </div>

            <div className="transistor-diodo">
              <h4>🔧 Diodo de Proteção (Flyback)</h4>
              <p>
                Quando você controla um <strong>motor ou relé</strong> com um transistor,
                <strong>sempre</strong> coloque um diodo em paralelo com a carga!
              </p>
              <div className="diodo-protecao-box">
                <p>
                  O motor gera uma <strong>tensão reversa</strong> quando desligado, que pode
                  queimar o transistor. O diodo desvia essa tensão, protegendo o circuito.
                </p>
                <div className="esquema-box">
                  <pre className="ascii-diagram">
{`
              Diodo 1N4007
              ┌───[▶|]───┐
              │          │
  Transistor ──┴── Motor ──┴── GND
`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Comparativo */}
          <section className="aula-section comparativo">
            <h2>📊 Comparativo: Passivos vs Ativos</h2>
            <div className="tabela-container">
              <table className="comparativo-tabela">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Componentes Passivos</th>
                    <th>Componentes Ativos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Exemplos</strong></td>
                    <td>Resistor, LED, LDR</td>
                    <td>Transistor, Diodo</td>
                  </tr>
                  <tr>
                    <td><strong>Precisa de energia?</strong></td>
                    <td>❌ Não</td>
                    <td>✅ Sim</td>
                  </tr>
                  <tr>
                    <td><strong>Pode amplificar?</strong></td>
                    <td>❌ Não</td>
                    <td>✅ Sim</td>
                  </tr>
                  <tr>
                    <td><strong>Polaridade</strong></td>
                    <td>Alguns (LED)</td>
                    <td>Todos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Monte um circuito para ligar e desligar um LED de alta potência usando um transistor NPN.</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li><strong>Componentes:</strong> Transistor BC547, LED, Resistor 220Ω, Resistor 1kΩ, Arduino</li>
                <li><strong>Comportamento:</strong> O LED acende quando o pino 9 estiver HIGH</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`// Código para controlar um LED com transistor
// LED no coletor do transistor, pino 9 controla a base

int pinoBase = 9;

void setup() {
  pinMode(pinoBase, OUTPUT);
}

void loop() {
  digitalWrite(pinoBase, HIGH);  // Liga o LED
  delay(1000);
  digitalWrite(pinoBase, LOW);   // Desliga o LED
  delay(1000);
}

// Esquema:
// Arduino pino 9 → resistor 1kΩ → Base do transistor
// LED → resistor 220Ω → Coletor do transistor
// Emissor → GND`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Qual a diferença entre um diodo e um LED?</li>
              <li>Por que o transistor é considerado um componente ativo?</li>
              <li>O que acontece se você ligar o diodo ao contrário?</li>
              <li>Para que serve o diodo de proteção (flyback) em motores?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Sei identificar a polaridade de um diodo
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Entendo a função do diodo em um circuito
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei a diferença entre NPN e PNP
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Entendo como usar um transistor como chave
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei que preciso de diodo de proteção para motores
              </label>
            </div>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/eletronica/3" className="btn-anterior">← Aula Anterior</a>
          <a href="/eletronica/5" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula4;