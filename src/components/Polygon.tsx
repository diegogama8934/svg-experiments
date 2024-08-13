export function Polygon() {


  return (
    <div className="section-container">
      <span className="section-legend">Poligonos</span>
      <div>
        <div className="experiment-container">
          <span className="experiment-legend">Básico</span>
          <svg
            height="220"
            width="500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="0,10 150,190 50,190"
              style={{
                fill: "lime",
                stroke: "purple",
                strokeWidth: 3
              }}
            />
          </svg>
        </div>
        <div className="experiment-container">
          <span className="experiment-legend">Fill rule</span>
          <svg
            height="210"
            width="500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="100,10 40,198 190,78 10,78 160,198"
              style={{
                fill:"lime",
                stroke:"purple",
                strokeWidth:5,
                fillRule:"evenodd"
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}