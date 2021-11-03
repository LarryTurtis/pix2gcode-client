import React from "react";
import { zoom } from "../store/zoomSlice";
import { useSelector, useDispatch } from "react-redux";

let counter = 0;

const Zoomer = (props) => {
  const zoomLevel = useSelector((state) => state.zoom);
  const dispatch = useDispatch();

  const handleZoomUpdate = (e) => {
    dispatch(zoom(counter++));
  };

  return (
    <div>
      <label className="btn btn-default">
        <button onClick={handleZoomUpdate}>Click!</button>
      </label>
    </div>
  );
};

export default Zoomer;
