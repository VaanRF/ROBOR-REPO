// src/pages/programacao/CodigoBase.js
import React, { useState } from 'react';
import './styles/CodigoBase.css';

export default function CodigoBase({
  titulo, descricao, componentes = [], pinagem = [],
  bibliotecas = [], codigo, observacoes = [],
}) {
  const [copiado, setCopiado] = useState(false);

  const copiar = () => {
    navigator.clipboard.writeText(codigo);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="codigo-container">
      <h1>{titulo}</h1>
      <p className="descricao">{descricao}</p>

      <section>
        <h2>🧰 Componentes necessários</h2>
        <ul>{componentes.map((c, i) => <li key={i}>{c}</li>)}</ul>
      </section>

      {pinagem.length > 0 && (
        <section>
          <h2>🔌 Pinagem</h2>
          <ul>{pinagem.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </section>
      )}

      {bibliotecas.length > 0 && (
        <section>
          <h2>📚 Bibliotecas</h2>
          <ul>{bibliotecas.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </section>
      )}

      <section>
        <div className="codigo-header">
          <h2>💾 Código base</h2>
          <button onClick={copiar} className="botao-copiar">
            {copiado ? '✅ Copiado!' : '📋 Copiar código'}
          </button>
        </div>
        <pre className="bloco-codigo"><code>{codigo}</code></pre>
      </section>

      {observacoes.length > 0 && (
        <section className="observacoes">
          <h2>💡 Observações importantes</h2>
          <ul>{observacoes.map((o, i) => <li key={i}>{o}</li>)}</ul>
        </section>
      )}
    </div>
  );
}s