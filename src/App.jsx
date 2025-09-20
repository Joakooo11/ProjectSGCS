import React from 'react';
import './App.css';
import Inicio from './pages/Inicio';
import GCS from './pages/GCS';
// import PDesarrollo from './pages/PDesarrollo';
// import SCRUM from './pages/SCRUM';
// import Glosario from './pages/Glosario';
// import Compara from './pages/Compara';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/GCS" element={<GCS />} />
      </Routes>
    </Router>
  );
}

export default App;

        /*        
        <Route path="/PDesarrollo" element={<PDesarrollo />} />
        <Route path="/SCRUM" element={<SCRUM />} />
        <Route path="/Glosario" element={<Glosario />} />
        <Route path="/Compara" element={<Compara />} />
        */ 