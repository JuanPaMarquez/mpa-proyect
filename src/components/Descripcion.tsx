import '../styles/Descripcion.css'

export default function Descripcion() {
  return (
    <>
      <h2>Modelo de Prediccion Academico</h2>
      <p>La creciente complejidad de los sistemas educativos exige el uso de herramientas analíticas que optimicen el proceso de enseñanza-aprendizaje. En este sentido, la ciencia de datos ha emergido como una solución clave para predecir el rendimiento académico, permitiendo anticipar el desempeño de los estudiantes y aplicar intervenciones tempranas que personalicen y mejoren su aprendizaje.</p>
      <p>La capacidad de predecir el rendimiento estudiantil trae ventajas significativas. No solo ayuda a identificar a los estudiantes en riesgo de bajo rendimiento, sino que también optimiza las estrategias educativas. Estudios recientes, como los de Amit Das, Sanjeev Malaviya y Manpreet Singh (2023), resaltan el potencial transformador de los modelos predictivos, mejorando los resultados académicos al personalizar la enseñanza. Además, como señala Jin (2023), estas predicciones son fundamentales para promover un sistema educativo más equitativo y eficiente.</p>
      <p>El principal desafío de este proyecto es la dificultad de predecir con precisión el rendimiento académico debido a la multitud de factores involucrados, como características personales, hábitos de estudio y el contexto educativo. Para abordar este reto se planteó, el siguiente objetivo: “desarrollar un modelo de predicción del desempeño académico, utilizando la metodología CRISP-DM, para identificar los factores clave que influyen en el rendimiento de los estudiantes y así mejorar las estrategias educativas en la materia de ciencia de datos.” </p>
      <p>La metodología CRISP-DM usada en este proyecto sigue estas etapas: </p>
      <ol>
        <li><strong>Comprensión del negocio:</strong> Se definen los objetivos del proyecto y la necesidad del modelo predictivo.</li>
        <li><strong>Comprensión de los datos:</strong> Se recopilan y analizan los datos académicos de los estudiantes. </li>
        <li><strong>Preparación de los datos:</strong> Se limpian y organizan los datos para su análisis.</li>
        <li><strong>Modelado:</strong> Se selecciona el modelo predictivo más adecuado.</li>
        <li><strong>Evaluación:</strong> Se mide la precisión del modelo.</li>
        <li><strong>Despliegue:</strong> El modelo final se utiliza para mejorar estrategias educativas.</li>
      </ol>
      <p>Los datos estructurados que se usaron, provenienen de las calificaciones y evaluaciones de los estudiantes, han sido seleccionados y validados cuidadosamente para asegurar su calidad y representatividad.</p>
      <p>Y finalmente el alcance del proyecto se centra en desarrollar un modelo predictivo aplicable a las materias específicas del docente, con el potencial de extenderse a otras áreas de la institución. El producto final permitirá identificar tempranamente a los estudiantes en riesgo y sugerir estrategias educativas basadas en los factores clave detectados. </p>
    </>
  );
}