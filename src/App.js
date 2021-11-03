import Canvas from "./components/Canvas";
import "./css/App.css";
import { useMainMutation } from "./services/pix2Code";
import FileUploader from "./components/FileUploader";
import Editor from "./components/Editor";

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
        <div className="App-content">
          <FileUploader />
          <Editor isLoading={isLoading} content={data} />
          <Canvas save={handleSave} />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
