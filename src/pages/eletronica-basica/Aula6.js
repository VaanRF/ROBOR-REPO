import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles/Aula6.css';

function Aula6() {
  return (
    <div className="aula-page">
      <Header />
      
      <main className="aula-container">
        <div className="aula-header">
          <div className="aula-breadcrumb">
            <a href="/">Início</a> &gt; <a href="/eletronica">Eletrônica Básica</a> &gt; <span>Aula 6</span>
          </div>
          <h1>🛡️ Segurança e Boas Práticas</h1>
          <div className="aula-meta">
            <span className="aula-modulo">Eletrônica Básica</span>
            <span className="aula-duracao">⏱️ 25 minutos</span>
            <span className="aula-nivel">🌱 Super Iniciante</span>
          </div>
        </div>

        <div className="aula-content">
          {/* Introdução */}
          <section className="aula-section introducao">
            <h2>🛡️ Por que Segurança é Importante?</h2>
            <p>
              A eletrônica é <strong>divertida e educativa</strong>, mas envolve
              <strong> eletricidade</strong> e <strong>componentes frágeis</strong>.
              Seguir boas práticas protege você, seus componentes e seu Arduino.
            </p>
            <div className="seguranca-grid">
              <div className="seguranca-item">
                <span className="seguranca-icone">⚡</span>
                <h4>Choques</h4>
                <p>Evite choques elétricos sempre!</p>
              </div>
              <div className="seguranca-item">
                <span className="seguranca-icone">🔥</span>
                <h4>Componentes</h4>
                <p>Não queime seus componentes</p>
              </div>
              <div className="seguranca-item">
                <span className="seguranca-icone">🧠</span>
                <h4>Boa Prática</h4>
                <p>Circuito organizado = vida longa</p>
              </div>
            </div>
          </section>

          {/* Regras de Ouro */}
          <section className="aula-section regras">
            <h2>🥇 Regras de Ouro da Eletrônica</h2>
            <div className="regras-grid">
              <div className="regra-card">
                <span className="regra-numero">1</span>
                <div>
                  <h4>Nunca ligue sem resistor</h4>
                  <p>LEDs e componentes sensíveis SEMPRE precisam de resistor</p>
                </div>
              </div>
              <div className="regra-card">
                <span className="regra-numero">2</span>
                <div>
                  <h4>Respeite a polaridade</h4>
                  <p>LEDs, diodos, capacitores, transistores — sempre verifique</p>
                </div>
              </div>
              <div className="regra-card">
                <span className="regra-numero">3</span>
                <div>
                  <h4>Use a tensão correta</h4>
                  <p>5V no Arduino, 3.3V em sensores delicados</p>
                </div>
              </div>
              <div className="regra-card">
                <span className="regra-numero">4</span>
                <div>
                  <h4>Desconecte antes de mexer</h4>
                  <p>Sempre desligue a energia antes de trocar componentes</p>
                </div>
              </div>
              <div className="regra-card">
                <span className="regra-numero">5</span>
                <div>
                  <h4>Diodo de proteção</h4>
                  <p>Em motores e relés, sempre use o diodo flyback</p>
                </div>
              </div>
              <div className="regra-card">
                <span className="regra-numero">6</span>
                <div>
                  <h4>Organize seus fios</h4>
                  <p>Circuito limpo = menos erros e mais fácil de entender</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cuidados com Arduino */}
          <section className="aula-section arduino-cuidados">
            <h2>🔌 Cuidados com o Arduino</h2>
            <p>
              O Arduino é um equipamento <strong>sensível</strong>. Alguns cuidados básicos
              vão garantir que ele dure muitos anos:
            </p>

            <div className="cuidados-grid">
              <div className="cuidado-item">
                <span className="cuidado-icone">🔋</span>
                <h4>Alimentação</h4>
                <ul>
                  <li>Use <strong>5V</strong> para alimentar o Arduino</li>
                  <li>Nunca conecte mais que <strong>12V</strong> no pino VIN</li>
                  <li>Não inverta polaridade da bateria</li>
                </ul>
              </div>

              <div className="cuidado-item">
                <span className="cuidado-icone">💡</span>
                <h4>Entradas/Saídas</h4>
                <ul>
                  <li>Nunca conecte <strong>mais de 5V</strong> em um pino</li>
                  <li>Corrente máxima por pino: <strong>40mA</strong></li>
                  <li>Use transistores para cargas maiores</li>
                </ul>
              </div>

              <div className="cuidado-item">
                <span className="cuidado-icone">🧊</span>
                <h4>Estática</h4>
                <ul>
                  <li>Toque em uma <strong>superfície metálica</strong> antes de manusear</li>
                  <li>Use <strong>pulseira antiestática</strong> se possível</li>
                  <li>Não toque nos pinos do Arduino sem necessidade</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Boas Práticas na Protoboard */}
          <section className="aula-section protoboard">
            <h2>🧱 Boas Práticas na Protoboard</h2>
            <p>
              Montar um circuito na protoboard pode parecer simples, mas algumas dicas
              vão evitar <strong>dores de cabeça</strong>:
            </p>

            <div className="praticas-grid">
              <div className="pratica-item">
                <span className="pratica-icone">📐</span>
                <h4>Organização</h4>
                <ul>
                  <li>Use os <strong>trilhos laterais</strong> para VCC e GND</li>
                  <li>Deixe espaço entre os componentes</li>
                  <li>Use <strong>jumpers de cores diferentes</strong></li>
                </ul>
              </div>

              <div className="pratica-item">
                <span className="pratica-icone">🔌</span>
                <h4>Conexões</h4>
                <ul>
                  <li>Componentes sempre <strong>encaixados firmemente</strong></li>
                  <li>Jumpers bem <strong>inseridos</strong> na protoboard</li>
                  <li>Evite fios <strong>mal encostados</strong></li>
                </ul>
              </div>

              <div className="pratica-item">
                <span className="pratica-icone">🧹</span>
                <h4>Limpeza</h4>
                <ul>
                  <li>Remova fios soltos da protoboard</li>
                  <li>Não acumule <strong>poeira</strong> nos contatos</li>
                  <li>Use <strong>protoboard limpa</strong> para melhores contatos</li>
                </ul>
              </div>
            </div>

            <div className="dica-extra">
              <p>
                💡 <strong>Dica do Bruxo:</strong> Sempre tire uma FOTO do seu circuito
                antes de desmontar. Isso ajuda a lembrar como estava e serve como
                documentação para futuros projetos!
              </p>
            </div>
          </section>

          {/* O que Fazer e Não Fazer */}
          <section className="aula-section do-dont">
            <h2>✅ O que Fazer ❌ O que Não Fazer</h2>
            <div className="do-dont-grid">
              <div className="do-box">
                <h4>✅ FAZER</h4>
                <ul>
                  <li>✔️ Desconectar o Arduino antes de mexer</li>
                  <li>✔️ Usar cores diferentes para VCC e GND</li>
                  <li>✔️ Testar componentes antes de ligar</li>
                  <li>✔️ Documentar seus circuitos</li>
                  <li>✔️ Pedir ajuda quando tiver dúvida</li>
                </ul>
              </div>
              <div className="dont-box">
                <h4>❌ NÃO FAZER</h4>
                <ul>
                  <li>❌ Ligar LED sem resistor</li>
                  <li>❌ Inverter polaridade de componentes</li>
                  <li>❌ Conectar tensão maior que 5V nos pinos</li>
                  <li>❌ Trabalhar com componentes molhados</li>
                  <li>❌ Usar fio desencapado na protoboard</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Segurança com Motores */}
          <section className="aula-section motores">
            <h2>⚙️ Segurança com Motores</h2>
            <p>
              Motores são <strong>cargas indutivas</strong> que podem gerar
              <strong> picos de tensão</strong> quando desligados. Siga estas regras:
            </p>

            <div className="motores-grid">
              <div className="motor-item">
                <span className="motor-icone">⚠️</span>
                <h4>Proteção</h4>
                <p>Sempre use <strong>diodo flyback</strong> (1N4007) em paralelo</p>
              </div>
              <div className="motor-item">
                <span className="motor-icone">🔋</span>
                <h4>Alimentação</h4>
                <p>Motores consomem muita corrente — use <strong>fonte externa</strong></p>
              </div>
              <div className="motor-item">
                <span className="motor-icone">🧊</span>
                <h4>Esquema</h4>
                <pre className="ascii-diagram">
{`
  Transistor  ──┴── Motor ──┴── GND
                  │
                 Diodo
               (1N4007)
`}
                </pre>
              </div>
            </div>
          </section>

          {/* Ferramentas */}
          <section className="aula-section ferramentas">
            <h2>🛠️ Ferramentas Essenciais</h2>
            <p>
              Para praticar com segurança, tenha estas ferramentas à mão:
            </p>

            <div className="ferramentas-grid">
              <div className="ferramenta-item">
                <span className="ferramenta-icone">📏</span>
                <h4>Multímetro</h4>
                <p>Mede tensão, corrente e resistência. Indispensável!</p>
              </div>
              <div className="ferramenta-item">
                <span className="ferramenta-icone">🔌</span>
                <h4>Fonte de Alimentação</h4>
                <p>Para testes, melhor que usar baterias</p>
              </div>
              <div className="ferramenta-item">
                <span className="ferramenta-icone">🧹</span>
                <h4>Kit de Limpeza</h4>
                <p>Protoboard limpa = melhores contatos</p>
              </div>
            </div>
          </section>

          {/* Desafio Final */}
          <section className="aula-section desafio">
            <h2>⚡ Desafio Final</h2>
            <div className="desafio-box">
              <p><strong>Identifique os erros neste circuito:</strong></p>
              <div className="desafio-esquema">
                <pre className="ascii-diagram">
{`
  9V ──[ LED ]──[ Resistor 10Ω ]── GND

  Problemas:
  1. Tensão da fonte: 9V com LED de 2V e resistor de 10Ω
  2. Corrente: (9V - 2V) / 10Ω = 0,7A = 700mA (MUITO ALTA!)
  3. LED vai queimar instantaneamente
`}
                </pre>
              </div>
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Qual o valor correto do resistor?</li>
              </ul>
              <details className="desafio-resposta">
                <summary>💡 Ver solução</summary>
                <pre className="codigo-pre">
{`R = (9V - 2V) / 0,02A
R = 7V / 0,02A
R = 350Ω →  Usamos 330Ω ou 470Ω

Circuito corrigido:
9V ──[ Resistor 330Ω ]──[ LED ]── GND`}
                </pre>
              </details>
            </div>
          </section>

          {/* Perguntas */}
          <section className="aula-section perguntas">
            <h2>❓ Perguntas para Reflexão</h2>
            <ul className="perguntas-lista">
              <li>Por que um LED queima sem resistor?</li>
              <li>Qual a tensão máxima em um pino do Arduino?</li>
              <li>O que é um diodo flyback e para que serve?</li>
            </ul>
          </section>

          {/* Checklist Final */}
          <section className="aula-section checklist">
            <h2>✅ Checklist Final do Módulo</h2>
            <div className="checklist-items">
              <label className="checklist-item">
                <input type="checkbox" /> Conheço as regras de ouro da eletrônica
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei como proteger meu Arduino
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Uso boas práticas na protoboard
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Sei como usar motores com segurança
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Tenho as ferramentas básicas
              </label>
              <label className="checklist-item">
                <input type="checkbox" /> Estou pronto para o módulo Intermediário! 🚀
              </label>
            </div>
          </section>
        </div>

        <div className="aula-navegacao">
          <a href="/eletronica/5" className="btn-anterior">← Aula Anterior</a>
          <a href="/" className="btn-proximo">🚀 Concluir →</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aula6;