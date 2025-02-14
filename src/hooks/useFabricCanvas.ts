import { useRef, useEffect, useState } from "react";
import * as fabric from "fabric";
import { useDispatch } from "react-redux";
import { setObjects, updateSelectedObject } from "../store/canvasSlice";

export const useFabricCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const { clientWidth, clientHeight } = canvasRef.current.parentElement ?? {};
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: clientWidth,
      height: clientHeight
    });
    const updateState = () => {
      dispatch(setObjects(fabricCanvas?.toJSON().objects));
    };

    fabricCanvas.on("selection:created", (e) => {
      if (e.selected && e.selected.length > 0) {
        dispatch(updateSelectedObject(e.selected[0].toJSON()));
      }
    });

    fabricCanvas.on("selection:updated", (e) => {
      if (e.selected && e.selected.length > 0) {
        dispatch(updateSelectedObject(e.selected[0].toJSON()));
      }
    });

    fabricCanvas?.on("mouse:up", updateState);
    fabricCanvas?.on("object:modified", (e) => {
      updateState();
      dispatch(updateSelectedObject(e.target.toJSON()));
    });
    fabricCanvas?.on("object:added", updateState);

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
