import { IoPersonOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import "../styles/Perfil.css";

function Perfil() {
  return (
    <div>
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
              <tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr><tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr><tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr><tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr><tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr><tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr><tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr><tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr><tr>
                <th className="prediccion">Prediccion 1</th>
                <th>Predicion CD AR Corte I</th>
                <th><button className="delete"><MdDeleteOutline /></button></th>
              </tr>
              
            </tbody>
          </table>
          <div className="pieConfig">
            <button className="buttonInfo">Informacion<FaRegQuestionCircle /></button>
            <button className="buttonNewPrediction">Nueva Prediccion</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Perfil