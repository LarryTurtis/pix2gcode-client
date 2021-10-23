import React, { useRef, useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { useSelector } from "react-redux";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const imageUrl = useSelector((state) => state.image.imageUrl);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const maybeUpdateImage = (e) => {
    console.log(e);
    if (isDragging) {
      const x = pos.x + e.movementX;
      const y = pos.y + e.movementY;
      setPos({ x, y });
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
        onMouseDown={(e) => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={(e) => maybeUpdateImage(e)}
      />
    </div>
  );
};

export default Canvas;
