import Canvas from "./components/Canvas";
import "./css/App.css";
import { useMainMutation } from "./services/pix2Code";
import FileUploader from "./components/FileUploader";
import Editor from "./components/Editor";
import Info from "./components/Info";
import Zoomer from "./components/Zoomer";

function App() {
  const [
    callMain, // This is the mutation trigger
    { isLoading, data },
  ] = useMainMutation();
  const handleSave = (fd) => {
    callMain(fd);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p className="main">PX2GC</p>
        <p className="sub">convert pixel sprites to gcode</p>
        <hr />
        <div className="App-content">
          <div className="controls">
            <FileUploader />
            <Info />
            <Zoomer />
          </div>
          <div className="views">
            <Canvas save={handleSave} />
            <Editor isLoading={isLoading} content={data} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
