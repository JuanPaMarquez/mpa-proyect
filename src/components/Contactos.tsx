import '../styles/Contactos.css'
import creadores from '../helpers/creadores'

export default function Contactos() {
  console.log(creadores)
  return (
    <div className='contactos'>
      <h2>Quienes Somos:</h2>
      <p>Somos estudiantes de la Universidad de Pamplona presentando este proyecto de ciencia de datos. </p>
      {
        creadores.map((persona, index) => {
          return (
            <div className='persona' key={index}>
              <img src={persona.imagen} alt="" />
              <div className='info'>
                <p>{persona.nombre}</p>
                <div className='links'>
                  <a id="profile-link" href={persona.linkedin} target="_blank">
                    <i className="fab fa-linkedin"> Linkedin</i>
                  </a>
                  <a id="profile-link" href={persona.github} target="_blank">
                    <i className="fab fa-github"> Github</i>
                  </a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}