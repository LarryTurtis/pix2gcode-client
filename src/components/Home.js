import Canvas from "./Canvas";
import { useMainMutation } from "../services/pix2Code";
import FileUploader from "./FileUploader";
import Editor from "./Editor";
import Info from "./Info";
import Zoomer from "./Zoomer";

function App() {
  const [
    callMain, // This is the mutation trigger
    { isLoading, data },
  ] = useMainMutation();
  const handleSave = (fd) => {
    callMain(fd);
  };
  return (
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
  );
}

export default App;
