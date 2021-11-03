import { useSelector } from "react-redux";
import "../css/Info.css";
import { calculateCanvasSize } from "../utils";

const Info = (props) => {
  const pixelSize = useSelector((state) => {
    return state.outputProps.pixelSize;
  });
  const zoomLevel = useSelector((state) => state.zoom.value);
  const canvasSize = calculateCanvasSize(zoomLevel);

  const finalSize = canvasSize * pixelSize;
  const finalSizeFt = Math.round((finalSize / 304.8) * 100) / 100;

  return (
    <table>
      <tbody>
        <tr>
          <td>Px Sz</td>
          <td>{pixelSize}mm</td>
        </tr>
        <tr>
          <td>Vertical Px</td>
          <td>{canvasSize}</td>
        </tr>
        <tr>
          <td>Horizontal Px</td>
          <td>{canvasSize}</td>
        </tr>
        <tr>
          <td>Final Width</td>
          <td>
            {finalSize}mm ({finalSizeFt}ft)
          </td>
        </tr>
        <tr>
          <td>Final Height</td>
          <td>
            {finalSize}mm ({finalSizeFt}ft)
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Info;
