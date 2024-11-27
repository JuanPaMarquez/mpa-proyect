import '../styles/crearRegistro.css'
import { FaQuestion } from "react-icons/fa";
import { useState, useLayoutEffect, useEffect } from "react";
import Dropdown from '../components/Dropdown';
import { corteSemestre, tipoMateria } from '../helpers/dropdownOptions';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../services/CurrentPrediction';
import * as XLSX from 'xlsx';
import { useStore } from '../services/CurrentPrediction';
import { APILINK, APIMODEL } from '../helpers/apilink';
// import axios from 'axios';

function CrearRegistro() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedCorte, setSelectedCorte] = useState(corteSemestre[0].value);
  const [selectedTipoMateria, setSelectedTipoMateria] = useState(tipoMateria[0].value);
  const [horasClase, setHorasClase] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileData, setFileData] = useState<unknown[] | null>(null);
  const { updateCurrentId } = useStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const corteNumero = arreglodeCorte(selectedCorte)
    console.log("submit: ", name);
    console.log("submit: ", corteNumero);
    console.log("submit: ", selectedTipoMateria);
    console.log("submit: ", horasClase);
    console.log("submit: ", fileName);
    console.log("submit: ", fileData);

    try {
      const response = await fetch(`${APILINK}/prediccion`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "iduser": user?.iduser,
          "nombreprediccion": name,
          "cortesemestre": corteNumero,
          "tipomateria": selectedTipoMateria,
          "horasclase": horasClase,
        })
      })

      const data = await response.json();
      console.log(data)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      updateCurrentId(data.idprediccion);

      const resResults = await fetch(`${APIMODEL}/${data.idprediccion}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fileData)
      })

      const resultados = await resResults.json();
      console.log("resultados", resultados)
      if(resultados) {
        const resGuardarResults = await fetch(`${APILINK}/resultados`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(resultados)
        })
        
        const datosEstudiantes = await resGuardarResults.json();
        console.log("datos en la api: ",datosEstudiantes)
        navigate('/resultados')
      }
      

    } catch (error) {
      console.log(error)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setFileData(json);
        console.log('Carga Completa')
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const arreglodeCorte = (corte: string) => {
    if(corte==="Primer Corte") {
      return 1
    } else if (corte==="Segundo Corte") {
      return 2
    }
    return 3
  }

  const handleCancelar = () => {
    navigate('/perfil')
  }

  const optionCorte = (option: string) => setSelectedCorte(option);
  const optionTipoMateria = (option: string) => setSelectedTipoMateria(option);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [])

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
              <Dropdown options={corteSemestre} cambiar={optionCorte} />
              <label className='materiaLabel' htmlFor="materia">Tipo de materia</label>
              <Dropdown options={tipoMateria} cambiar={optionTipoMateria} />
              <div className='nombreInput'>
                <label htmlFor="nombre">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  className='nombrePredicion' 
                  onChange={handleName} 
                  placeholder='Ciencia de Datos AR, Redes BR...'
                  required
                />
              </div>
              <div className='horasClase'>
                <label htmlFor="horasClase">Horas de clase (semanales)</label>
                <input 
                  type="number" 
                  id="horasClase" 
                  name="horasClase" 
                  onChange={(e) => setHorasClase(Number(e.target.value))} 
                  placeholder='4, 5, 10...'
                  required
                />
              </div>
              <div className='archivo'>
                <label htmlFor="archivoExcel">Adjuntar archivo</label>
                <div className="button-file">
                  <span className="file-name">{fileName || 'No se ha seleccionado archivo'}</span>
                  <input 
                    type="file" 
                    id="archivoExcel" 
                    name="archivoExcel"  
                    onChange={handleFileChange}
                    accept=".xlsx, .xls"
                    required
                  />
                </div>
              </div>
              
            </div>
            <div className="controlCrearRegistro">
              <button className='cancelarButton' type="button" onClick={handleCancelar}>Cancelar</button>
              <button className='calculaButton' type="submit">Calcular</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default CrearRegistro