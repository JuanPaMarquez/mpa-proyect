import '../styles/Resultados.css'
import {  useEffect, useLayoutEffect, useState } from 'react';
import { useStore } from '../services/CurrentPrediction';
import { IoBookOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { APILINK } from '../helpers/apilink';

interface Result {
  idprediccion: number;
  idresultados: number;
  nombre: string;
  resultado: string;
}


function Resultados() {
  const navigate = useNavigate();
  const [results, setResults] = useState<Result[]>([]);
  const { currentIdPrediction, currentNamePrediction } = useStore();

  useLayoutEffect(() => {
    document.body.style.background = "linear-gradient(to left, #A46596 50%, #423FFB 80%)";
  }, []);

  useEffect(() => {
    if (!currentNamePrediction) {
      navigate('/perfil');
    }

    const fetchRes = async () => {
      try {
        const response = await fetch(`${APILINK}/resultados/${currentIdPrediction}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json(); 
        // setPredictions(data);
        console.log("data: ", data)
        setResults(data);
        // console.log("info: ", predictions)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchRes();

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
              {results.map((result) => (
                <tr key={result.idprediccion}>
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