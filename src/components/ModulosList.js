import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ModulosList.css';

const modulos = [
  { 
    id: 1, 
    titulo: 'Introdução à Robótica', 
    descricao: 'Conceitos básicos e primeiras interações', 
    emoji: '🤖', 
    aulas: 10,
    rota: '/intro/aula/1'  // Primeira aula do módulo
  },
  { 
    id: 2, 
    titulo: 'Eletrônica Básica', 
    descricao: 'Componentes e circuitos', 
    emoji: '⚡', 
    aulas: 6,
    rota: '/eletronica/1'  // Primeira aula do módulo
  },
{
  id: 3,
  titulo: 'Programação com Arduino',
  descricao: 'Repositório de códigos base para projetos',
  emoji: '💻',
  aulas: 4,
  rota: '/programacao'
},
  { 
    id: 4, 
    titulo: 'Sensores e Atuadores', 
    descricao: 'Interação com o mundo', 
    emoji: '📡', 
    aulas: 7,
    rota: '/sensores/1'  // Para o futuro
  },
];

function ModulosList() {
  const navigate = useNavigate();

  const handleAcessar = (rota) => {
    navigate(rota);
  };

  return (
    <section className="modulos">
      <h2 className="section-title">📚 Módulos Disponíveis</h2>
      <div className="modulos-grid">
        {modulos.map(modulo => (
          <div key={modulo.id} className="modulo-card">
            <div className="modulo-emoji">{modulo.emoji}</div>
            <h3>{modulo.titulo}</h3>
            <p>{modulo.descricao}</p>
            <span className="modulo-aulas">{modulo.aulas} aulas</span>
            <button 
              className="btn-acessar"
              onClick={() => handleAcessar(modulo.rota)}
            >
              Acessar →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ModulosList;