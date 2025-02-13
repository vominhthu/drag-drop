import { useRef, useEffect, useState } from "react";
import * as fabric from "fabric";

export const useFabricCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "black",
      width: 736,
      height: 300
    });
    setCanvas(fabricCanvas);

    return () => {
      fabricCanvas.dispose();
    };
  }, [size]);

  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current?.parentElement) {
        console.log(`canvasRef.current.parentElement: `, canvasRef.current.parentElement);
        setSize({
          width: canvasRef.current.parentElement.clientWidth,
          height: canvasRef.current.parentElement.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return {
    canvasRef,
    canvas,
  };
};
