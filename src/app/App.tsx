import { useLayoutEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../styles/App.css';
import Login from '../layouts/Login';
import Inicio from '../layouts/Inicio';
import Perfil from '../layouts/Perfil';
import CrearRegistro from '../layouts/CrearRegistro';
import Resultados from '../layouts/Resultados';

function App() {
  const location = useLocation();
  const path = location.pathname;
  const [styleTitle, setStyleTitle] = useState('inicio');

  useLayoutEffect(() => {
    const style = path.replace('/', '');
    setStyleTitle(style === '' ? 'inicio' : style);
  }, [path]);

  return (
    <div className={styleTitle}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/registro" element={<CrearRegistro />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
    </div>
  );
}

export default App;
