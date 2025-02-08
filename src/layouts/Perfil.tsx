import { IoPersonOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
// import { MdDeleteOutline } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import "../styles/Perfil.css";
import {  useEffect, useLayoutEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Predictions from "../components/Predictions";
import { useUserStore } from '../services/CurrentPrediction';

function Perfil() {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  const crearRegistro = () => {
    navigate('/registro');
  }

  const cerrarSesion = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      console.log(user)
    }
  }, []);

  useLayoutEffect(() => {
    document.body.style.background = "linear-gradient(to left, #A46596 50%, #423FFB 80%)";
  }, []);

  return (
    <>
      <main className="perfilContainer">
        <div className="barraPerfil">
          <div className="perfilNombre">
            <IoPersonOutline />{user?.nombrecompleto}
          </div>
          <div className="perfilConfig">
            <IoMdSettings />
          </div>
        </div>
        <div className="barraContenido">
          <div>
            <h2 className="perfilTableHead">Historial de predicciones</h2>
            <table className="perfilTable">
              <tbody>
                <Predictions />
              </tbody>
            </table>
          </div>
          <div className="pieConfig">
            <button className="buttonInfo" onClick={cerrarSesion}>Cerrar Sesion<IoExitOutline /></button>
            <button className="buttonNewPrediction" onClick={crearRegistro}>Nueva Prediccion</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Perfil