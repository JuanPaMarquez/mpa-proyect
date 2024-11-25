import '../styles/Resultados.css'
import resultsJSON from '../mocks/resultados.json'
import {  useLayoutEffect, useState } from 'react';
import { useStore } from '../services/CurrentPrediction';
import { IoBookOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Resultados() {
  const navigate = useNavigate();
  const [results] = useState(resultsJSON);
  const { currentNamePrediction } = useStore();

  useLayoutEffect(() => {
    document.body.style.background = "linear-gradient(to left, #A46596 50%, #423FFB 80%)";
  }, []);

  return (
    <>
      <main className="resultContainer">
        <div className="barraResult">
          <span className='iconBook'>
            <IoBookOutline />
            {currentNamePrediction ? <h2>{currentNamePrediction}</h2> : <h2>No hay prediccion</h2>}
          </span>
          <button 
            className='buttonExitResult'
            onClick={() => navigate('/perfil')}  
          >
            <IoMdExit />
          </button>
        </div>
        <div className="resultContenido">
          <table className='tableResults'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Resultados</th>
              </tr>
            </thead>
            <tbody className='bodyTable'>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{result.nombre}</td>
                  <td>{result.resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </main>
    </>
  )
}

export default Resultados;