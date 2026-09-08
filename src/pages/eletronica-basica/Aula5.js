import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula5.css';

function Aula5() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/eletronica">Eletrônica Básica</a> &gt; <span>Aula 5</span>
          </div>
          <h1>📋 Como Ler Esquemas Elétricos</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Eletrônica Básica</span>
            <span className="aula-duracao">⏱️ 30 minutos</span>
            <span className="aula-nivel">🌱 Super Iniciante</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Introdução */}
          <section className="aula-section introducao">
            <h2>📋 O que é um Esquema Elétrico?</h2>
            <p>
              Um <strong>esquema elétrico</strong> (ou diagrama esquemático) é um
              <strong> mapa</strong> que mostra como os componentes de um circuito
              estão conectados. É a "receita" que todo eletrônico usa para montar seus projetos.
            </p>
            <div className="esquema-info">
              <div className="info-item">
                <span className="info-icone">🗺️</span>
                <h4>É um mapa</h4>
                <p>Mostra o caminho da corrente elétrica</p>
              </div>
              <div className="info-item">
                <span className="info-icone">🔤</span>
                <h4>Usa símbolos</h4>
                <p>Cada componente tem um símbolo único</p>
              </div>
              <div className="info-item">
                <span className="info-icone">📏</span>
                <h4>Não é escala</h4>
                <p>O tamanho e posição não representam a realidade</p>
              </div>
            </div>
          </section>

          {/* Símbolos */}
          <section className="aula-section simbolos">
            <h2>🔣 Símbolos dos Componentes</h2>
            <p>
              Cada componente tem um <strong>símbolo padronizado</strong> usado em todo o mundo.
              Aprender esses símbolos é o primeiro passo para ler esquemas.
            </p>

            <div className="simbolos-grid">
              <div className="simbolo-card">
                <div className="simbolo-exemplo">
                  <pre className="simbolo-pre">───[R]───</pre>
                </div>
                <h4>Resistor</h4>
                <p>Limita a corrente</p>
              </div>

              <div className="simbolo-card">
                <div className="simbolo-exemplo">
                  <pre className="simbolo-pre">───[▶]───</pre>
                </div>
                <h4>LED</h4>
                <p>Emite luz (tem polaridade)</p>
              </div>

              <div className="simbolo-card">
                <div className="simbolo-exemplo">
                  <pre className="simbolo-pre">───[▶|]───</pre>
                </div>
                <h4>Diodo</h4>
                <p>Corrente em um só sentido</p>
              </div>

              <div className="simbolo-card">
                <div className="simbolo-exemplo">
                  <pre className="simbolo-pre">
{`     C
     │
  ───┤  B
     │
     E`}
                  </pre>
                </div>
                <h4>Transistor NPN</h4>
                <p>Chave/amplificador</p>
              </div>

              <div className="simbolo-card">
                <div className="simbolo-exemplo">
                  <pre className="simbolo-pre">[ 5V ]</pre>
                </div>
                <h4>Fonte de Tensão</h4>
                <p>Bateria ou alimentação</p>
              </div>

              <div className="simbolo-card">
                <div className="simbolo-exemplo">
                  <pre className="simbolo-pre">───┴───</pre>
                </div>
                <h4>GND (Terra)</h4>
                <p>Referência do circuito</p>
              </div>
            </div>
          </section>

          {/* Como ler */}
          <section className="aula-section como-ler">
            <h2>📖 Como Ler um Esquema</h2>
            <p>
              Ler um esquema é como ler uma <strong>história</strong>: a corrente elétrica
              começa na fonte, passa pelos componentes e volta ao terra.
            </p>

            <div className="passos-ler">
              <div className="passo-ler">
                <span className="passo-numero">1</span>
                <div>
                  <h4>Identifique a Fonte</h4>
                  <p>Procure onde a energia entra no circuito (bateria, 5V, etc.)</p>
                </div>
              </div>
              <div className="passo-ler">
                <span className="passo-numero">2</span>
                <div>
                  <h4>Siga a Corrente</h4>
                  <p>A corrente vai da fonte (positivo) em direção ao terra (negativo)</p>
                </div>
              </div>
              <div className="passo-ler">
                <span className="passo-numero">3</span>
                <div>
                  <h4>Leia os Componentes</h4>
                  <p>Cada símbolo representa um componente. Veja o que ele faz no caminho</p>
                </div>
              </div>
              <div className="passo-ler">
                <span className="passo-numero">4</span>
                <div>
                  <h4>Encontre o Terra</h4>
                  <p>Todos os circuitos terminam no GND. É o "caminho de volta"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Exemplo Prático */}
          <section className="aula-section exemplo-pratico">
            <h2>🔦 Exemplo Prático — Circuito com LED</h2>
            <p>
              Vamos analisar um <strong>circuito simples</strong> com um LED e um resistor:
            </p>

            <div className="exemplo-grid">
              <div className="exemplo-esquema">
                <h4>📋 Esquema</h4>
                <pre className="ascii-diagram">
{`
  5V ──[ Resistor 220Ω ]──[ LED ]── GND
`}
                </pre>
              </div>
              <div className="exemplo-analise">
                <h4>🔍 Análise</h4>
                <ol>
                  <li>
                    <strong>Fonte:</strong> 5V (Arduino ou bateria)
                  </li>
                  <li>
                    <strong>Caminho:</strong> 5V → Resistor → LED → GND
                  </li>
                  <li>
                    <strong>Resistor:</strong> Limita a corrente para 20mA
                  </li>
                  <li>
                    <strong>LED:</strong> Emite luz quando a corrente passa
                  </li>
                  <li>
                    <strong>GND:</strong> Fecha o circuito
                  </li>
                </ol>
              </div>
            </div>

            <div className="esquema-montagem">
              <h4>🔌 Do Esquema para a Montagem</h4>
              <div className="montagem-grid">
                <div className="montagem-item">
                  <span className="montagem-icone">📋</span>
                  <h5>No Esquema:</h5>
                  <p>5V → Resistor → LED → GND</p>
                </div>
                <div className="montagem-item">
                  <span className="montagem-icone">🧱</span>
                  <h5>Na Protoboard:</h5>
                  <p>5V → resistor → ânodo do LED → cátodo → GND</p>
                </div>
              </div>
            </div>
          </section>

          {/* Exemplo Arduino */}
          <section className="aula-section exemplo-arduino">
            <h2>📟 Exemplo com Arduino</h2>
            <p>
              Veja como ler o esquema de um <strong>circuito com Arduino</strong>:
            </p>

            <div className="arduino-grid">
              <div className="arduino-esquema">
                <h4>📋 Esquema</h4>
                <pre className="ascii-diagram">
{`
  Arduino Uno
  ┌─────────┐
  │         │
  │    13   ├──────────┤ o───[R]───o│  ← LED
  │         │          │             │
  │   GND   ├──────────┤ GND         │
  └─────────┘          └──────────────┘
`}
                </pre>
              </div>
              <div className="arduino-analise">
                <h4>🔍 Análise</h4>
                <ol>
                  <li>
                    <strong>Pino 13:</strong> Saída digital (5V)
                  </li>
                  <li>
                    <strong>Resistor 220Ω:</strong> Protege o LED
                  </li>
                  <li>
                    <strong>LED:</strong> Ânodo (longo) no resistor, cátodo (curto) no GND
                  </li>
                  <li>
                    <strong>GND:</strong> Fecha o circuito
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Dicas */}
          <section className="aula-section dicas">
            <h2>💡 Dicas para Ler Esquemas</h2>
            <div className="dicas-grid">
              <div className="dica-item">
                <span className="dica-icone">🔍</span>
                <h4>Siga a Corrente</h4>
                <p>Sempre do positivo (VCC) para o negativo (GND)</p>
              </div>
              <div className="dica-item">
                <span className="dica-icone">🔤</span>
                <h4>Rotule os Componentes</h4>
                <p>Use R1, R2 para resistores, D1, D2 para diodos, etc.</p>
              </div>
              <div className="dica-item">
                <span className="dica-icone">📐</span>
                <h4>Não se Preocupe com Posição</h4>
                <p>No esquema, a posição não é física — é lógica</p>
              </div>
              <div className="dica-item">
                <span className="dica-icone">🔄</span>
                <h4>Pratique!</h4>
                <p>Quanto mais esquemas você ler, mais fácil fica</p>
              </div>
            </div>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Analise o esquema abaixo e responda:</strong></p>
              <div className="desafio-esquema">
                <pre className="ascii-diagram">
{`
  5V ──[ Resistor 220Ω ]──[ LED ]──┐
                                   │
                                   │
                              ┌────┴────┐
                              │ Botão   │
                              └────┬────┘
                                   │
                                  GND
`}
                </pre>
              </div>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>O que acontece quando o botão está aberto?</li>
                <li>O que acontece quando o botão está fechado?</li>
                <li>Qual a função do resistor de 220Ω?</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`Botão aberto: O LED está apagado (circuito não fecha)

Botão fechado: O LED acende (circuito completo)

Resistor 220Ω: Limita a corrente do LED para 20mA`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Qual a diferença entre um esquema e a montagem física?</li>
              <li>Por que os esquemas usam símbolos em vez de desenhos realistas?</li>
              <li>O que significa a seta em um diodo?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Identifico os símbolos dos componentes
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei seguir o caminho da corrente
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Reconheço uma fonte e um terra
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Consigo ler um esquema básico
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei converter esquema → montagem
              </label>
            </div>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/eletronica/4" className="btn-anterior">← Aula Anterior</a>
          <a href="/eletronica/6" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula5;