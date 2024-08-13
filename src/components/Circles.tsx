export function Circles(){

  return(
    <div className="section-container">
      <span className="section-legend">Circulos</span>
      <span>La posición de un circulo no es en la esquina superior izquierda como en el rectangulo, es en el centro</span>
      <div>
        <div className="experiment-container">
          <span className="experiment-legend">Básico</span>
          <svg
            height="100"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="45"
              cx="50"
              cy="50"
              fill="red"
            />
          </svg>
        </div>
        <div className="experiment-container">
          <span className="experiment-legend">Sin estilos CSS</span>
          <svg
            height="100"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="45"
              cx="50"
              cy="50"
              fill="red"
              stroke="green"
              strokeWidth={5}
              opacity={0.6}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}