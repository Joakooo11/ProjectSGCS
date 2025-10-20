import React from 'react';
import './App.css';
import Inicio from './pages/Inicio';
import GCS from './pages/GCS';
import PDesarrollo from './pages/PDesarrollo';
import SCRUM from './pages/SCRUM';
import KANBAN from './pages/Kanban';
import Glosario from './pages/Glosario';
import Preguntas from './pages/Preguntas';
// import Compara from './pages/Compara';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/GCS" element={<GCS />} />
        <Route path="/PDesarrollo" element={<PDesarrollo />} />
        <Route path="/SCRUM" element={<SCRUM />} />
        <Route path="/Kanban" element={<KANBAN />} />
        <Route path="/Glosario" element={<Glosario />} />
        <Route path="/Preguntas" element={<Preguntas />} />
      </Routes>
    </Router>
  );
}

export default App;