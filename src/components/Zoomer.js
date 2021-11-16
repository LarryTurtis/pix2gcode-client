import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { zoom } from "../store/zoomSlice";
import { updatePixelSize, updatePixelShading } from "../store/outputPropsSlice";
import { useSelector, useDispatch } from "react-redux";

const Zoomer = (props) => {
  const zoomLevel = useSelector((state) => state.zoom.value);
  const dispatch = useDispatch();
  const pixelSize = useSelector((state) => {
    return state.outputProps.pixelSize;
  });
  const pixelShading = useSelector((state) => {
    return state.outputProps.pixelShading;
  });
  const handleZoomUpdate = (e) => {
    dispatch(zoom(e));
  };

  const handlePixelSizeUpdate = (e) => {
    dispatch(updatePixelSize(e));
  };
  const handlePixelShadingUpdate = (e) => {
    dispatch(updatePixelShading(e));
  };
  return (
    <div className="sliders">
      <p>
        Zoom
        <Slider
          min={1}
          default={100}
          reverse
          value={zoomLevel}
          ariaLabelForHandle="Zoom"
          onChange={handleZoomUpdate}
        />
      </p>
      <p>
        Pixel Size
        <Slider
          min={1}
          default={4}
          max={20}
          value={pixelSize}
          ariaLabelForHandle="Pixel Size"
          onChange={handlePixelSizeUpdate}
        />
      </p>
      <p>
        Pixel Shading
        <Slider
          min={1}
          default={4}
          max={20}
          value={pixelShading}
          ariaLabelForHandle="Pixel Shading"
          onChange={handlePixelShadingUpdate}
        />
      </p>
    </div>
  );
};

export default Zoomer;
