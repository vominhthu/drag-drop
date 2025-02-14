import { useRef, useEffect, useState } from "react";
import * as fabric from "fabric";

export const useFabricCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const { clientWidth, clientHeight } = canvasRef.current.parentElement ?? {};
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: clientWidth,
      height: clientHeight
    });
    setCanvas(fabricCanvas);
    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  return {
    canvasRef,
    canvas,
  };
};
