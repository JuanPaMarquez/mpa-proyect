import '../styles/Login.css'
import { useState } from 'react'
import { FiUser, FiLock  } from "react-icons/fi";

function Login() {
  const [inputUser, setInputUser] = useState('');
  const [inputLock, setInputLock] = useState('');

  const handleInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUser(e.target.value);
  };

  const handleInputLock = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLock(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputUser);
  };

  // const logoPath = import.meta.env.DEV ? "./accountLogo.png" : "/mpa-proyect/accountLogo.png";

  return (
    <div className='loginContainer'>
      <div>
        <img className='logoAccount' src="./accountLogo.png" alt="logo"/>
      </div>
      <h1 className='titleLogin'>Iniciar Sesión</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className="input-container-user">
          {inputUser === '' && (
                <div className="iconUser">
                    <FiUser />
                </div>
            )}
          <input 
            type="text" 
            placeholder="Usuario"
            value={inputUser}
            onChange={handleInputUser}
            required
          />
        </div>
        <div className="input-container-user">
          {inputLock === '' && (
                <div className="iconUser">
                    <FiLock />
                </div>
            )}
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={inputLock}
            onChange={handleInputLock}
            required
          />
        </div>
        <h3 className='textPassword'>
          ¿Has olvidado tu <u>
              <a 
                // href="/resetPassword"
                className='buttonPassword'
              >contraseña
              </a>
            </u>?
        </h3>
        <button className='buttonSubmit' type="submit">INGRESAR</button>
      </form>
      <button className='buttonAccount'>CREAR CUENTA</button>
    </div>
  )
}

export default Login