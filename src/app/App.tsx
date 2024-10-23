import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../styles/App.css';
import Login from '../components/Login';
import Inicio from '../components/Inicio';

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
        </Routes>
      </div>
  );
}

export default App;
