import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { zoom } from "../store/zoomSlice";
import { updatePixelSize } from "../store/outputPropsSlice";
import { useSelector, useDispatch } from "react-redux";

const Zoomer = (props) => {
  const zoomLevel = useSelector((state) => state.zoom.value);
  const dispatch = useDispatch();
  const pixelSize = useSelector((state) => {
    return state.outputProps.pixelSize;
  });
  const handleZoomUpdate = (e) => {
    dispatch(zoom(e));
  };

  const handlePixelSizeUpdate = (e) => {
    dispatch(updatePixelSize(e));
  };
  return (
    <div>
      <label className="btn btn-default">
        Zoom
        <Slider
          min={1}
          default={100}
          reverse
          value={zoomLevel}
          ariaLabelForHandle="Zoom"
          onChange={handleZoomUpdate}
        />
      </label>
      <label className="btn btn-default">
        Pixel Size
        <Slider
          min={1}
          default={4}
          max={20}
          value={pixelSize}
          ariaLabelForHandle="Pixel Size"
          onChange={handlePixelSizeUpdate}
        />
      </label>
    </div>
  );
};

export default Zoomer;
