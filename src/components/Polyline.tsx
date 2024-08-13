export function Polyline() {
  return (
    <div className="section-container">
      <span className="section-legend">Poligonos</span>
      <div>
        <div className="experiment-container">
          <span className="experiment-legend">Básico</span>
          <svg
            height="210"
            width="500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              points="0,0 50,150 100,75 150,50 200,140 250,140"
              style={{
                fill: "none",
                stroke: "green",
                strokeWidth: 3
              }}
            />
          </svg>
        </div>
        <div className="experiment-container">
          <span className="experiment-legend">Básico</span>
          <svg
            height="180"
            width="500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline 
              points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
              style={{
                fill:"yellow",
                stroke:"red",
                strokeWidth:4
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}