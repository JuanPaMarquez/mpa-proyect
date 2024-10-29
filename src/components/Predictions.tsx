import { useState } from 'react';
import prediction from '../mocks/predicciones.json'
import { MdDeleteOutline } from "react-icons/md";


function Predictions() {
  const [predicciones, setPredicciones] = useState(prediction.historialPredicciones);

  const deletePrediction = (id: number) => {
    setPredicciones(predicciones.filter(prediccion => prediccion.id !== id));
  }
  
  return (
    <>
      {
        predicciones.map(prediccion => (
            <tr key={prediccion.id}>
              <th className="prediccion">{prediccion.namePrediction}</th>
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

