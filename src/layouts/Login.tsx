import '../styles/Login.css'
import { useState } from 'react'
import { FiUser, FiLock  } from "react-icons/fi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [inputUser, setInputUser] = useState('')
  const [inputLock, setInputLock] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [girar, setGirar] = useState(false)
  const navigate = useNavigate();

  const handleInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUser(e.target.value);
  };

  const handleInputLock = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLock(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputUser);
    navigate('/perfil');
  };

  const girarFuncion = () => {
    setGirar(!girar)
  }

  // const logoPath = import.meta.env.DEV ? "./accountLogo.png" : "/mpa-proyect/accountLogo.png";

  return (
    <div 
      className={`loginContainer ${girar ? 'rotate' : ''}`}
    >
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
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña" 
            value={inputLock}
            onChange={handleInputLock}
            required
          />
          {inputLock !== '' && ( 
          <button 
            type='button'
            className='iconPassword' 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff /> }
          </button>)}
        </div>

        <h3 className='textPassword'>
          ¿Has olvidado tu <u>
              <a 
                onClick={girarFuncion}
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