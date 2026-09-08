import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula3.css';

function Aula3() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/eletronica">Eletrônica Básica</a> &gt; <span>Aula 3</span>
          </div>
          <h1>🧩 Componentes Passivos</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Eletrônica Básica</span>
            <span className="aula-duracao">⏱️ 35 minutos</span>
            <span className="aula-nivel">🌱 Super Iniciante</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Introdução */}
          <section className="aula-section introducao">
            <h2>🧩 O que são Componentes Passivos?</h2>
            <p>
              Componentes passivos são aqueles que <strong>não geram energia</strong>, apenas
              <strong> consomem, armazenam ou limitam</strong> a energia elétrica no circuito.
              Eles são a base de qualquer projeto eletrônico.
            </p>
            <div className="passivos-grid">
              <div className="passivo-item">
                <span className="passivo-icone">⚡</span>
                <h4>Resistor</h4>
                <p>Limita a corrente</p>
              </div>
              <div className="passivo-item">
                <span className="passivo-icone">💡</span>
                <h4>LED</h4>
                <p>Emite luz</p>
              </div>
              <div className="passivo-item">
                <span className="passivo-icone">🌤️</span>
                <h4>LDR</h4>
                <p>Detecta luz</p>
              </div>
            </div>
          </section>

          {/* Resistor */}
          <section className="aula-section resistor">
            <h2>⚡ Resistor</h2>
            <p>
              O <strong>resistor</strong> é o componente mais comum em eletrônica.
              Ele <strong>limita a corrente</strong> que passa pelo circuito,
              protegendo outros componentes.
            </p>

            <div className="componente-box">
              <div className="componente-simbolo">
                <h4>Símbolo</h4>
                <pre className="simbolo-pre">
{`───[R]───`}
                </pre>
              </div>
              <div className="componente-info">
                <h4>Características</h4>
                <ul>
                  <li><strong>Função:</strong> Limitar corrente</li>
                  <li><strong>Unidade:</strong> Ohms (Ω)</li>
                  <li><strong>Tipos:</strong> Fixo, Variável (Potenciômetro), LDR</li>
                </ul>
              </div>
            </div>

            <h3>🎨 Código de Cores dos Resistores</h3>
            <p>
              Resistores têm <strong>faixas coloridas</strong> que indicam seu valor.
              Cada cor representa um número:
            </p>
            <div className="codigo-cores">
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: 'black', color: 'white' }}>Preto</span>
                <span className="cor-valor">0</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: '#8B4513', color: 'white' }}>Marrom</span>
                <span className="cor-valor">1</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: 'red', color: 'white' }}>Vermelho</span>
                <span className="cor-valor">2</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: 'orange', color: 'black' }}>Laranja</span>
                <span className="cor-valor">3</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: 'yellow', color: 'black' }}>Amarelo</span>
                <span className="cor-valor">4</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: 'green', color: 'white' }}>Verde</span>
                <span className="cor-valor">5</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: 'blue', color: 'white' }}>Azul</span>
                <span className="cor-valor">6</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: '#8B00FF', color: 'white' }}>Violeta</span>
                <span className="cor-valor">7</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: 'gray', color: 'white' }}>Cinza</span>
                <span className="cor-valor">8</span>
              </div>
              <div className="cor-item">
                <span className="cor-bolinha" style={{ background: 'white', color: 'black', border: '1px solid #ccc' }}>Branco</span>
                <span className="cor-valor">9</span>
              </div>
            </div>

            <div className="exemplo-resistor">
              <h4>📝 Exemplo: Resistor de 220Ω</h4>
              <div className="faixas-exemplo">
                <div className="faixa" style={{ background: 'red' }}>Vermelho</div>
                <div className="faixa" style={{ background: 'red' }}>Vermelho</div>
                <div className="faixa" style={{ background: 'brown' }}>Marrom</div>
                <div className="faixa" style={{ background: 'gold' }}>Dourado</div>
              </div>
              <p style={{ marginTop: '0.5rem' }}>
                <strong>2</strong> (Vermelho) <strong>2</strong> (Vermelho) × <strong>10</strong>¹ (Marrom) = <strong>220Ω</strong> ± 5% (Dourado)
              </p>
            </div>
          </section>

          {/* LED */}
          <section className="aula-section led">
            <h2>💡 LED (Diodo Emissor de Luz)</h2>
            <p>
              O <strong>LED</strong> é um componente que <strong>emite luz</strong> quando
              a corrente passa por ele. É muito usado em projetos para indicar status,
              iluminação e até comunicação.
            </p>

            <div className="componente-box">
              <div className="componente-simbolo">
                <h4>Símbolo</h4>
                <pre className="simbolo-pre">
{`───[▶]───`}
                </pre>
              </div>
              <div className="componente-info">
                <h4>Características</h4>
                <ul>
                  <li><strong>Função:</strong> Emitir luz</li>
                  <li><strong>Tensão típica:</strong> 1,8V a 3,3V</li>
                  <li><strong>Corrente típica:</strong> 20mA</li>
                  <li><strong>Polaridade:</strong> Ânodo (+) e Cátodo (-)</li>
                </ul>
              </div>
            </div>

            <div className="led-polaridade">
              <h4>🔌 Identificando a Polaridade do LED</h4>
              <div className="polaridade-grid">
                <div className="polaridade-item">
                  <span className="polaridade-icone">➕</span>
                  <h5>Ânodo (Positivo)</h5>
                  <ul>
                    <li>Perna <strong>mais longa</strong></li>
                    <li>Lado <strong>plano</strong> da haste interna é menor</li>
                  </ul>
                </div>
                <div className="polaridade-item">
                  <span className="polaridade-icone">➖</span>
                  <h5>Cátodo (Negativo)</h5>
                  <ul>
                    <li>Perna <strong>mais curta</strong></li>
                    <li>Lado <strong>achatado</strong> do LED</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="led-resistor">
              <h4>⚠️ LED SEMPRE COM RESISTOR!</h4>
              <p>
                Um LED <strong>NUNCA</strong> deve ser ligado diretamente a uma fonte
                de tensão. Ele precisa de um <strong>resistor</strong> para limitar a corrente
                e evitar queimar.
              </p>
              <div className="esquema-box">
                <pre className="ascii-diagram">
{`
  5V ──[ Resistor 220Ω ]──[ LED ]── GND
`}
                </pre>
              </div>
            </div>
          </section>

          {/* LDR */}
          <section className="aula-section ldr">
            <h2>🌤️ LDR (Fotoresistor)</h2>
            <p>
              O <strong>LDR</strong> (Light Dependent Resistor) é um resistor que
              <strong> muda sua resistência conforme a luz</strong>. Quanto mais luz,
              menor a resistência; quanto menos luz, maior a resistência.
            </p>

            <div className="componente-box">
              <div className="componente-simbolo">
                <h4>Símbolo</h4>
                <pre className="simbolo-pre">
{`───[☀]───`}
                </pre>
              </div>
              <div className="componente-info">
                <h4>Características</h4>
                <ul>
                  <li><strong>Função:</strong> Detectar luz</li>
                  <li><strong>Com luz:</strong> Resistência BAIXA (~100Ω)</li>
                  <li><strong>Sem luz:</strong> Resistência ALTA (~1MΩ)</li>
                </ul>
              </div>
            </div>

            <div className="ldr-uso">
              <h4>🔌 Como usar o LDR com Arduino</h4>
              <p>
                O LDR é usado em um <strong>divisor de tensão</strong> com um resistor de 10kΩ.
                O pino central vai para uma entrada analógica (A0).
              </p>
              <div className="esquema-box">
                <pre className="ascii-diagram">
{`
  Arduino     LDR + Resistor 10kΩ
  ┌─────────┐
  │    5V   ├─────────── LDR ────┐
  │         │                    │
  │    A0   ├───────────┬────────┤
  │         │           │        │
  │   GND   ├─────── Resistor 10kΩ
  └─────────┘
`}
                </pre>
              </div>
            </div>
          </section>

          {/* Comparativo */}
          <section className="aula-section comparativo">
            <h2>📊 Comparativo dos Componentes</h2>
            <div className="tabela-container">
              <table className="comparativo-tabela">
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Função</th>
                    <th>Unidade</th>
                    <th>Polaridade?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Resistor</strong></td>
                    <td>Limita corrente</td>
                    <td>Ohms (Ω)</td>
                    <td>❌ Não</td>
                  </tr>
                  <tr>
                    <td><strong>LED</strong></td>
                    <td>Emite luz</td>
                    <td>V / mA</td>
                    <td>✅ Sim</td>
                  </tr>
                  <tr>
                    <td><strong>LDR</strong></td>
                    <td>Detecta luz</td>
                    <td>Ohms (Ω)</td>
                    <td>❌ Não</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Desafio */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio</h2>
            <div className="desafio-box">
              <p><strong>Identifique o valor do resistor pelas cores:</strong></p>
              <ul style={{ marginTop: '0.5rem' }}>
                <li><strong>Marrom - Preto - Vermelho - Dourado</strong></li>
                <li><strong>Amarelo - Violeta - Laranja - Dourado</strong></li>
                <li><strong>Verde - Azul - Marrom - Dourado</strong></li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`Marrom(1) Preto(0) × 10² (Vermelho) = 1000Ω = 1kΩ ±5%

Amarelo(4) Violeta(7) × 10³ (Laranja) = 47000Ω = 47kΩ ±5%

Verde(5) Azul(6) × 10¹ (Marrom) = 560Ω ±5%`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Por que o LED precisa de um resistor?</li>
              <li>O que acontece se ligarmos um LED ao contrário?</li>
              <li>Onde você usaria um LDR em um projeto?</li>
            </ul>
          </section>

          {/* Checklist */}
          <section className="aula-section checklist">
            <h2>✅ Checklist do Aluno</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Identifico um resistor pelo código de cores
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei a diferença entre ânodo e cátodo do LED
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Entendo que LED precisa de resistor
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei como o LDR muda com a luz
              </label>
            </div>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/eletronica/2" className="btn-anterior">← Aula Anterior</a>
          <a href="/eletronica/4" className="btn-proximo">Próxima Aula →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula3;