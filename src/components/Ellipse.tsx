export function Ellipse(){


  return(
    <div className="section-container">
      <span className="section-legend">Ellipses</span>
      <span>La posicion del ellipse igual es hacia su centro</span>
      <div>
        <div className="experiment-container">
          <span className="experiment-legend">Básico</span>
          <svg
            height="140"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              rx="80"
              ry="50"
              cx="120"
              cy="80"
              style={{
                fill: "yellow",
                stroke: "green",
                strokeWidth: 3
              }}
            />
          </svg>          
        </div>
        
        <div className="experiment-container">
          <span className="experiment-legend">Varios</span>
          <svg height="150" width="500" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="240" cy="100" rx="220" ry="30" fill="purple" style={{stroke:"blue", strokeWidth:4}}/>
            <ellipse cx="220" cy="70" rx="190" ry="20" fill="lime" style={{stroke:"blue", strokeWidth:4}}/>
            <ellipse cx="210" cy="45" rx="170" ry="15" fill="yellow" style={{stroke:"blue", strokeWidth:4}}/>
          </svg>
        </div>
      </div>
    </div>
  );
}