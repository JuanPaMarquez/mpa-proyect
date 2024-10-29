import { IoPersonOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
// import { MdDeleteOutline } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import "../styles/Perfil.css";
import {  useLayoutEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Predictions from "../components/Predictions";

function Perfil() {
  const navigate = useNavigate();

  const crearRegistro = () => {
    navigate('/registro');
  }

  useLayoutEffect(() => {
    document.body.style.background = "linear-gradient(to left, #A46596 50%, #423FFB 80%)";
  }, []);

  return (
    <>
      <main className="perfilContainer">
        <div className="barraPerfil">
          <div className="perfilNombre">
            <IoPersonOutline />Jose Chacon
          </div>
          <div className="perfilConfig">
            <IoMdSettings />
          </div>
        </div>
        <div className="barraContenido">
          <table className="perfilTable">
            <thead className="perfilTableHead">
              <h2>Historial de predicciones</h2>
            </thead>
            <tbody>
              <Predictions />
            </tbody>
          </table>
          <div className="pieConfig">
            <button className="buttonInfo">Informacion<FaRegQuestionCircle /></button>
            <button className="buttonNewPrediction" onClick={crearRegistro}>Nueva Prediccion</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Perfil