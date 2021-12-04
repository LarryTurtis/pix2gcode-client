import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { dataURItoBlob, calculateCanvasSize } from "../utils";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const image = useSelector((state) => {
    return state.image.image;
  });
  const zoomLevel = useSelector((state) => state.zoom.value);
  const pixelSize = useSelector((state) => state.outputProps.pixelSize);
  const pixelShading = useSelector((state) => state.outputProps.pixelShading);

  const save = () => {
    const canvas = canvasRef.current;
    var dataURL = canvas.toDataURL();
    var blob = dataURItoBlob(dataURL);
    var fd = new FormData(document.forms[0]);
    fd.append("file", blob);
    fd.append("pixelSize", pixelSize);
    fd.append("pixelShading", pixelShading);
    props.save(fd);
  };

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mouseStart, setMouseStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const maybeUpdateImage = (e) => {
    const canvas = canvasRef.current;
    if (isDragging) {
      let mouseX = e.clientX - canvas.offsetLeft;
      let mouseY = e.clientY - canvas.offsetTop;
      const dx = (mouseX - mouseStart.x) * (zoomLevel / 100);
      const dy = (mouseY - mouseStart.y) * (zoomLevel / 100);
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
  }, [image]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    if (localImg.current.src) context.drawImage(localImg.current, pos.x, pos.y); // Or at whatever offset you like
  });

  // We will show the whole image if we can
  // const relevantDimension = Math.max(
  //   image.dimensions.width,
  //   image.dimensions.height
  // );

  // But if the image is larger than 50px either width or height will be cropped
  const canvasSize = calculateCanvasSize(zoomLevel);
  return (
    <div>
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
      <p>
        <button onClick={save}>Save</button>
      </p>
    </div>
  );
};

export default Canvas;
