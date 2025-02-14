import { useEffect, useRef, useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import * as fabric from "fabric";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CircleIcon from "@mui/icons-material/Circle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TitleIcon from "@mui/icons-material/Title";

export default function CanvasEditor() {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      backgroundColor: "#f3f3f3",
    });

    canvasRef.current = canvas;

    canvas.on("selection:created", (e) => {
      setSelectedObject(e.selected ? e.selected[0] : null);
    });

    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.setWidth(containerRef.current.clientWidth);
        canvas.setHeight(containerRef.current.clientHeight);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.dispose();
    };
  }, []);

  const addRectangle = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 150,
      height: 100,
    });
    canvasRef.current?.add(rect);
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      left: 200,
      top: 100,
      radius: 50,
      fill: "blue",
    });
    canvasRef.current?.add(circle);
  };

  const addLine = () => {
    const line = new fabric.Line([50, 50, 200, 50], {
      stroke: "black",
      strokeWidth: 2,
    });
    canvasRef.current?.add(line);
  };

  const addText = () => {
    const text = new fabric.IText("Enter text...", {
      left: 250,
      top: 100,
      fontSize: 24,
      fill: "black",
      editable: true, // Cho phép chỉnh sửa
    });
  
    canvasRef.current?.add(text);
    canvasRef.current?.setActiveObject(text);
  };
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: 250, p: 2, bgcolor: "#f8f9fa", borderRight: "1px solid #ddd" }}>
        <h3>DETAILS</h3>
        <Button variant="contained">Save</Button>
      </Box>

      {/* Main Editor */}
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        {/* Toolbar */}
        <Box sx={{ bgcolor: "white", p: 1, borderRadius: 2, boxShadow: 1 }}>
          <IconButton onClick={addRectangle}>
            <CropSquareIcon />
          </IconButton>
          <IconButton onClick={addCircle}>
            <CircleIcon />
          </IconButton>
          <IconButton onClick={addLine}>
            <HorizontalRuleIcon />
          </IconButton>
          <IconButton onClick={addText}>
            <TitleIcon />
          </IconButton>
        </Box>

        {/* Canvas Container */}
        <Box ref={containerRef} sx={{ width: "100%", height: "100%", position: "relative" }}>
          <canvas id="canvas"></canvas>
        </Box>
      </Box>

      {/* Properties Panel */}
      {selectedObject && (
        <Box sx={{ width: 250, p: 2, bgcolor: "#f8f9fa", borderLeft: "1px solid #ddd" }}>
          <h3>Properties</h3>
          <p>Type: {selectedObject.type}</p>
        </Box>
      )}
    </Box>
  );
}
