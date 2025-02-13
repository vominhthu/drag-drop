import React, { useEffect, useRef, useState } from "react";
import { useFabricCanvas } from '../../hooks'
import * as fabric from 'fabric'

const FabricCanvas: React.FC = () => {
  const { canvas, canvasRef } = useFabricCanvas();
  const addRectangle = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 150,
      height: 100,
    });
    canvas?.add(rect);
  };
  
  const addCircle = () => {
    const circle = new fabric.Circle({
      left: 200,
      top: 100,
      radius: 50,
      fill: "green",
    });
    canvas?.add(circle);
  };
  
  const addText = () => {
    const text = new fabric.Text("Hello Fabric.js!", {
      left: 150,
      top: 200,
      fontSize: 20,
      fill: "black",
    });
    canvas?.add(text);
  };

  return (
  <>
    <canvas ref={canvasRef} />
    <button onClick={addRectangle}>Add Rect</button>
    <button onClick={addCircle}>Add Circle</button>
    <button onClick={addText}>Add Text</button>
  </>
  )
};

export default FabricCanvas;
