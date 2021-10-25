import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const imageUrl = useSelector((state) => state.image.imageUrl);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mouseStart, setMouseStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const maybeUpdateImage = (e) => {
    const canvas = canvasRef.current;

    if (isDragging) {
      let mouseX = e.clientX - canvas.offsetLeft;
      let mouseY = e.clientY - canvas.offsetTop;
      const dx = (mouseX - mouseStart.x) / 10;
      const dy = (mouseY - mouseStart.y) / 10;
      setMouseStart({ x: mouseX, y: mouseY });
      setPos({ x: pos.x + dx, y: pos.y + dy });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //Our first draw
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    const img = new Image();
    img.onload = function () {
      context.drawImage(img, pos.x, pos.y); // Or at whatever offset you like
    };
    img.src = imageUrl;
    console.log(pos);
  });

  return (
    <div>
      <canvas
        width={25}
        height={50}
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
    </div>
  );
};

export default Canvas;
