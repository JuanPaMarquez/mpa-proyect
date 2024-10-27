import '../styles/CrearRegistro.css'
import '../styles/Dropdown.css'
import { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoCaretUpSharp } from "react-icons/io5";

interface Option {
  value: string;
}

export type DropdownProps = {
  options: Option[];
  cambiar: (value: string) => void;
}

function Dropdown({ options, cambiar }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false); // Controla si el menú está abierto
  const [selectedOption, setSelectedOption] = useState(options[0]); // Selecciona la opción actual

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    cambiar(option.value);
    setIsOpen(false); // Cierra el menú después de seleccionar una opción
  };

  return (
    <div className="dropdown">
      <button type='button' onClick={toggleDropdown} className="dropdown-toggle">
        <span>{selectedOption.value}</span>
        {isOpen ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map(option => (
            <li
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown