import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aula1 from './pages/intro/Aula1';
import Aula2 from './pages/intro/Aula2';
import Aula3 from './pages/intro/Aula3';
import Aula4 from './pages/intro/Aula4';
import Aula5 from './pages/intro/Aula5';
import Aula6 from './pages/intro/Aula6';
import Aula7 from './pages/intro/Aula7';
import Aula8 from './pages/intro/Aula8';
import Aula9 from './pages/intro/Aula9';
import Aula10 from './pages/intro/Aula10';
import EletronicaAula1 from './pages/eletronica-basica/Aula1';
import EletronicaAula2 from './pages/eletronica-basica/Aula2';
import EletronicaAula3 from './pages/eletronica-basica/Aula3';
import EletronicaAula4 from './pages/eletronica-basica/Aula4';
import EletronicaAula5 from './pages/eletronica-basica/Aula5';
import EletronicaAula6 from './pages/eletronica-basica/Aula6';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro/aula/1" element={<Aula1 />} />
          <Route path="/intro/aula/2" element={<Aula2 />} />
          <Route path="/intro/aula/3" element={<Aula3 />} />
          <Route path="/intro/aula/4" element={<Aula4 />} />
          <Route path="/intro/aula/5" element={<Aula5 />} />
          <Route path="/intro/aula/6" element={<Aula6 />} />
          <Route path="/intro/aula/7" element={<Aula7 />} />
          <Route path="/intro/aula/8" element={<Aula8 />} />
          <Route path="/intro/aula/9" element={<Aula9 />} />
          <Route path="/intro/aula/10" element={<Aula10 />} />
          <Route path="/eletronica/1" element={<EletronicaAula1 />} />
          <Route path="/eletronica/2" element={<EletronicaAula2 />} />  
          <Route path="/eletronica/3" element={<EletronicaAula3 />} />
          <Route path="/eletronica/4" element={<EletronicaAula4 />} />
          <Route path="/eletronica/5" element={<EletronicaAula5 />} />
          <Route path="/eletronica/6" element={<EletronicaAula6 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
