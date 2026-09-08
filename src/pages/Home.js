import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ModulosList from '../components/ModulosList';
import ProjetosDestaque from '../components/ProjetosDestaque';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ModulosList />
      <ProjetosDestaque />
      <Footer />
    </div>
  );
}

export default Home;