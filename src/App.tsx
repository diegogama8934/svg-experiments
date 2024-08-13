// import './App.css'
import { Rectangles } from "./components/Rectangles";
import { Circles } from "./components/Circles";
import { Ellipse } from "./components/Ellipse";
import { Line } from "./components/Line";
import { Polygon } from "./components/Polygon";
import { Polyline } from "./components/Polyline";

function App() {

  return (
    <>
      <h1>SVG Animations experiment</h1>
      <Rectangles />
      <Circles />
      <Ellipse />
      <Line />
      <Polygon />
      <Polyline />
    </>
  )
}

export default App
