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
        backgroundColor: "transparent",
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
