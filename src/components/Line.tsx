export function Line(){
  return(
    <div className="section-container">
      <span className="section-legend">Ellipses</span>
      <div>
        <div className="experiment-container">
          <span className="experiment-legend">Básico</span>
          <svg
            height="140"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1={0}
              y1={0}
              x2={300}
              y2={140}
              strokeWidth={6}
              stroke="red"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}