

export function Rectangles() {
  return (
    <div className="section-container">
      <span className="section-legend">Rectángulos</span>
      <div>
        <div className="experiment-container">
          <span className="experiment-legend">Básico</span>
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="200"
              height="100"
              x="5"
              y="5"
              rx="10"
              ry="10"
              fill="blue"
            />
          </svg>
        </div>

        <div className="experiment-container">
          <span className="experiment-legend">Con estilos CSS</span>
          <svg width="320" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect 
              width="200"
              height="100"
              x="5"
              y="5"
              rx="10"
              ry="10"
              style={{
                fill:"blue",
                strokeWidth:3,
                stroke:"red",
                strokeOpacity: 0.9,
                fillOpacity: 0.7
              }}
            />
          </svg>
        </div>
      </div>
    </div> 
  )
}
