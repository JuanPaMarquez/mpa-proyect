import '../styles/crearRegistro.css'
import { FaQuestion } from "react-icons/fa";
import { useState, useLayoutEffect } from "react";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'Primer Corte', label: 'Primer Corte' },
  { value: 'Segundo Corte', label: 'Segundo Corte' },
  { value: 'Tercer Corte', label: 'Tercer Corte' },
];

function CrearRegistro() {
  const [isOpen, setIsOpen] = useState(false); // Controla si el menú está abierto
  const [selectedOption, setSelectedOption] = useState(options[0]); // Selecciona la opción actual

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectedOption.value);
  }


  const toggleDropdown = () => setIsOpen(!isOpen); // Abre o cierra el menú
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false); // Cierra el menú después de seleccionar una opción
  };

  useLayoutEffect(() => {
    document.body.style.background = "linear-gradient(to left, #A46596 50%, #423FFB 80%)";
  }, [])
  return (
    <>
      <main className="crearRegistroContainer">
        <div className="tituloRegistroContainer">
          <h1>Ingreso de Datos</h1>
        </div>
        <div className="insercionDatosContainer">
          <div className='encabezadoCrear'>
            <h1>Datos</h1>
            <FaQuestion />
          </div>
          <form className='formRegistro' action="" onSubmit={handleSubmit}>
            <div className='datosRegistro'>
              <label className='semestreLabel' htmlFor="semestre">Momento del semestre</label>
              <div className="dropdown">
                <button type='button' onClick={toggleDropdown} className="dropdown-toggle">{selectedOption.label}</button>
                {isOpen && (
                  <ul className="dropdown-menu">
                    {options.map(option => (
                      <li
                        key={option.value}
                        className="dropdown-option"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="controlCrearRegistro">
              <button className='cancelarButton' type="submit">Cancelar</button>
              <button className='calculaButton' type="submit">Calcular</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default CrearRegistro