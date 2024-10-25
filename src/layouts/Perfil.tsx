import { IoPersonOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
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
        <div className="barraContenido">contenido</div>
      </main>
    </div>
  )
}

export default Perfil