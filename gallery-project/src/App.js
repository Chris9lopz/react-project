import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coche1 from './components/Coche1';
import Coche2 from './components/Coche2';
import Coche3 from './components/Coche3';
import Coche4 from './components/Coche4';
import Coche5 from './components/Coche5';
import Coche6 from './components/Coche6';
import Coche7 from './components/Coche7';
import Coche8 from './components/Coche8';
import Coche9 from './components/Coche9';
import Coche10 from './components/Coche10';
import { Navigation } from './components/Navigation';


function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id="title" className='text-center my-3'>Galería</h1>
      </div>
      <Routes>
          <Route path="/Coche1" element={<Coche1/>} />
          <Route path="/Coche2" element={<Coche2/>} />
          <Route path="/Coche3" element={<Coche3/>} />
          <Route path="/Coche4" element={<Coche4/>} />
          <Route path="/Coche5" element={<Coche5/>} />
          <Route path="/Coche6" element={<Coche6/>} />
          <Route path="/Coche7" element={<Coche7/>} />
          <Route path="/Coche8" element={<Coche8/>} />
          <Route path="/Coche9" element={<Coche9/>} />
          <Route path="/Coche10" element={<Coche10/>} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
