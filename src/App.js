import Canvas from "./components/Canvas";
import "./css/App.css";
import { useMainMutation } from "./services/pix2Code";
import FileUploader from "./components/FileUploader";
import Editor from "./components/Editor";
import Info from "./components/Info";

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
        Pix2Code
        <div className="App-content">
          <FileUploader />
          <Editor isLoading={isLoading} content={data} />
          <Canvas save={handleSave} />
        </div>
        <Info />
      </header>
    </div>
  );
}

export default App;
