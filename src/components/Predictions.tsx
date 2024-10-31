import { useState } from 'react';
import prediction from '../mocks/predicciones.json'
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useStore } from '../services/CurrentPrediction';

function Predictions() {
  const navigate = useNavigate();
  const [predicciones, setPredicciones] = useState(prediction.historialPredicciones);
  const { updateCurrentId } = useStore();
  const { updateCurrentName } = useStore();

  const deletePrediction = (id: number) => {
    setPredicciones(predicciones.filter(prediccion => prediccion.id !== id));
  }
  
  const handlePrediction = (id: number, name: string) => {
    console.log(id)
    navigate('/resultados')
    updateCurrentId(id);
    updateCurrentName(name);
  }

  return (
    <>
      {
        predicciones.map(prediccion => (
            <tr key={prediccion.id}>
              <th className="prediccion" onClick={() => handlePrediction(prediccion.id, prediccion.namePrediction)}>{prediccion.namePrediction}</th>
              <th>{prediccion.corteSemestre}</th>
              <th><button className="delete" onClick={() => deletePrediction(prediccion.id)}><MdDeleteOutline /></button></th>
            </tr>
          )
        )
      }
    </>
  )
}

export default Predictions;

