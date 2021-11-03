import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { zoom } from "../store/zoomSlice";
import { useSelector, useDispatch } from "react-redux";

const Zoomer = (props) => {
  const zoomLevel = useSelector((state) => state.zoom.value);
  const dispatch = useDispatch();

  const handleZoomUpdate = (e) => {
    dispatch(zoom(e));
  };

  return (
    <div>
      <label className="btn btn-default">
        <Slider
          min={1}
          default={100}
          reverse
          value={zoomLevel}
          onChange={handleZoomUpdate}
        />
      </label>
    </div>
  );
};

export default Zoomer;
