import '../styles/Login.css'
import { useLayoutEffect, useState } from 'react'
import { FiUser, FiLock  } from "react-icons/fi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { APILINK } from '../helpers/apilink';

function Login() {
  const navigate = useNavigate();
  const [inputUser, setInputUser] = useState('')
  const [inputLock, setInputLock] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [girar, setGirar] = useState(false)
  const [badUser, setBadUser] = useState('')

  const handleInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUser(e.target.value);
  };

  const handleInputLock = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLock(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(inputUser);
    try {
      const response = await fetch(`${APILINK}/profesor/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "user": inputUser,
          "password": inputLock,
        })
      })

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } 
      
      if (!data) {
        console.log(data)
        setBadUser("Usuario o contraseña incorrectos");
        setInputUser('');
        setInputLock('');
      } else {
        navigate('/perfil');
        // Guardar la información en localStorage
        localStorage.setItem('user', JSON.stringify(data));
      }
      console.log(data)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };

  const girarFuncion = () => {
    setGirar(!girar)
  }

  // const logoPath = import.meta.env.DEV ? "./accountLogo.png" : "/mpa-proyect/accountLogo.png";
  useLayoutEffect(() => {
    document.body.style.background = "linear-gradient(to left, #A46596 50%, #423FFB 80%)";
  }, [])
  return (
    <div 
      className={`loginContainer ${girar ? 'rotate' : ''}`}
    >
      <div>
        <img className='logoAccount' src="./accountLogo.png" alt="logo"/>
      </div>
      <h1 className='titleLogin'>Iniciar Sesión</h1>
      <form className='formLogin' onSubmit={handleSubmit}>
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
        {badUser !== '' && <p className='badUser'>{badUser}</p>}

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