import { IoPersonOutline } from "react-icons/io5";
import "../styles/Perfil.css";

function Perfil() {
  return (
    <div>
      <main>
        <div className="barraPerfil"><IoPersonOutline />perfil</div>
        <div className="barraContenido">contenido</div>
      </main>
    </div>
  )
}

export default Perfil