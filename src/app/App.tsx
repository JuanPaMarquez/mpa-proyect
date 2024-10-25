import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../styles/App.css';
import Login from '../layouts/Login';
import Inicio from '../layouts/Inicio';
import Perfil from '../layouts/Perfil';

function App() {
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    console.log('Current path in App:', path);
  }, [path]);
  return (
      <div className={path === '/' ? 'inicio' : 'app-login'}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
  );
}

export default App;
