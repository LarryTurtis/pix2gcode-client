import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const imageUrl = useSelector((state) => state.image.imageUrl);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //Our first draw
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    const img = new Image();
    img.onload = function () {
      context.drawImage(img, 0, 0); // Or at whatever offset you like
    };
    img.src = imageUrl;
  });

  return (
    <div>
      <canvas width={25} height={50} ref={canvasRef} {...props} />
    </div>
  );
};

export default Canvas;
