import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { zoom } from "../store/zoomSlice";
import { updatePixelSize, updatePixelShading } from "../store/outputPropsSlice";
import { useSelector, useDispatch } from "react-redux";

const Zoomer = (props) => {
  const sliderColor = "hotpink";
  const trackStyle = { backgroundColor: sliderColor };
  const handleStyle = { border: `2px solid ${sliderColor}` };
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
      <label>
        Zoom
        <Slider
          trackStyle={trackStyle}
          handleStyle={handleStyle}
          min={2}
          default={100}
          reverse
          value={zoomLevel}
          ariaLabelForHandle="Zoom"
          onChange={handleZoomUpdate}
        />
      </label>
      <label>
        Pixel Size
        <Slider
          trackStyle={trackStyle}
          handleStyle={handleStyle}
          min={1}
          default={4}
          max={20}
          value={pixelSize}
          ariaLabelForHandle="Pixel Size"
          onChange={handlePixelSizeUpdate}
        />
      </label>
      <label>
        Pixel Shading
        <Slider
          trackStyle={trackStyle}
          handleStyle={handleStyle}
          min={0}
          default={0}
          max={10}
          value={pixelShading}
          ariaLabelForHandle="Pixel Shading"
          onChange={handlePixelShadingUpdate}
        />
      </label>
    </div>
  );
};

export default Zoomer;
