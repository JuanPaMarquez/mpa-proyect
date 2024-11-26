import { useEffect, useState } from 'react';
// import prediction from '../mocks/predicciones.json'
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useStore } from '../services/CurrentPrediction';

interface Prediction {
  idprediccion: number;
  iduser: number;
  nombreprediccion: string;
  cortesemestre: number;
  tipomateria: string;
  horasclase: number;
}

function Predictions() {
  const navigate = useNavigate();
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const { updateCurrentId } = useStore();
  const { updateCurrentName } = useStore();

  const deletePrediction = (id: number) => {
    // setPredicciones(predicciones.filter(prediccion => prediccion.id !== id));
  }
  
  const handlePrediction = (id: number, name: string) => {
    console.log(id)
    navigate('/resultados')
    updateCurrentId(id);
    updateCurrentName(name);
  }

  const arreglodeCorte = (corte: number) => {
    if(corte===1) {
      return "Primer Corte"
    } else if (corte===2) {
      return "Segundo Corte"
    }
    return "Tercer Corte"
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/v1/prediccion/1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data: Prediction[] = await response.json();
        setPredictions(data);
        console.log("data: ", data)
        console.log("info: ", predictions)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();

  }, []);

  return (
    <>
      {
        predictions.map(prediccion => (
            <tr key={prediccion.idprediccion}>
              <th className="prediccion" onClick={() => handlePrediction(prediccion.idprediccion, prediccion.nombreprediccion)}>{prediccion.nombreprediccion}</th>
              <th>{arreglodeCorte(prediccion.cortesemestre)}</th>
              <th><button className="delete" onClick={() => deletePrediction(prediccion.idprediccion)}><MdDeleteOutline /></button></th>
            </tr>
          )
        )
      }
    </>
  )
}

export default Predictions;

