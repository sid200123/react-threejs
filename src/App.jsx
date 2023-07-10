import "./App.css";
import CanvasComponent from "./component/ComputersCanvas";
import { ComputerModel } from "./component/ComputerModel";
import Home from "./Home";

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        // backgroundColor: "transparent",
        backgroundImage: `url(https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1200)`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"
      }}
    >
      <div
        id="canvas-container"
        style={{
          width: "50%",
          height: "92%",
        }}
      >
        <CanvasComponent>
          <ComputerModel />
        </CanvasComponent>
      </div>
      <Home />
    </div>
  );
}

export default App;
