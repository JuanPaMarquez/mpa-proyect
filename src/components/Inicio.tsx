// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Inicio() {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/login');
  }


  return (
    <div>
      <h1>Inicio</h1>
      <button onClick={handleClick}>Ingresar</button>
    </div>
  )
}

export default Inicio