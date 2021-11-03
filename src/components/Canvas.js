import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { dataURItoBlob } from "../util";
import { useMainMutation } from "../services/pix2Code";
import Loader from "./Loader";

const MAX_PIXELS = 50;

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const [
    callMain, // This is the mutation trigger
    { isLoading, data },
  ] = useMainMutation();
  const image = useSelector((state) => {
    return state.image.image;
  });

  const save = () => {
    const canvas = canvasRef.current;
    var dataURL = canvas.toDataURL();
    var blob = dataURItoBlob(dataURL);
    var fd = new FormData(document.forms[0]);
    fd.append("file", blob);
    callMain(fd);
  };

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mouseStart, setMouseStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  let scaleFactor = 0.1;

  const maybeUpdateImage = (e) => {
    const canvas = canvasRef.current;
    if (isDragging) {
      let mouseX = e.clientX - canvas.offsetLeft;
      let mouseY = e.clientY - canvas.offsetTop;
      const dx = (mouseX - mouseStart.x) * scaleFactor;
      const dy = (mouseY - mouseStart.y) * scaleFactor;
      setMouseStart({ x: mouseX, y: mouseY });
      setPos({ x: pos.x + dx, y: pos.y + dy });
    }
  };

  const localImg = useRef(new Image());
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    localImg.current.onload = () => {
      context.drawImage(localImg.current, pos.x, pos.y); // Or at whatever offset you like
    };
    if (image) localImg.current.src = image.imageUrl;

    let cwidth = getComputedStyle(canvas).getPropertyValue("width");
    let iwidth = image.dimensions.width;
    scaleFactor = iwidth / cwidth;
  }, [image]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    if (localImg.current.src) context.drawImage(localImg.current, pos.x, pos.y); // Or at whatever offset you like
  });

  // We will show the whole image if we can
  const relevantDimension = Math.max(
    image.dimensions.width,
    image.dimensions.height
  );

  // But if the image is larger than 50px either width or height will be cropped
  const canvasSize = Math.min(relevantDimension, MAX_PIXELS);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <code className="gcode">{data && data.map((el) => <p>{el}</p>)}</code>
      )}
      <canvas
        width={canvasSize}
        height={canvasSize}
        ref={canvasRef}
        {...props}
        onMouseDown={(e) => {
          let canvas = canvasRef.current;
          setMouseStart({
            x: e.clientX - canvas.offsetLeft,
            y: e.clientY - canvas.offsetTop,
          });
          setIsDragging(true);
        }}
        onMouseUp={() => {
          setIsDragging(false);
          setPos({ x: Math.floor(pos.x), y: Math.floor(pos.y) });
        }}
        onMouseMove={(e) => maybeUpdateImage(e)}
      />
      <button onClick={() => save()}>Save</button>
    </div>
  );
};

export default Canvas;
