import '../styles/crearRegistro.css'
import { FaQuestion } from "react-icons/fa";
import { useLayoutEffect } from "react";

export function CrearRegistro() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  }

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
              <select name="semestre" id="semestre">
                <option value="1">Primer Corte</option>
                <option value="2">Segundo Corte</option>
                <option value="3">Tercer Corte</option>
              </select>
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