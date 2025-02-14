import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { Box, Button, TextField, Typography } from "@mui/material";

const FabricCanvasLoader: React.FC = () => {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const canvasEl = useRef<HTMLCanvasElement | null>(null);
  const [jsonText, setJsonText] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Khởi tạo Fabric Canvas
  useEffect(() => {
    if (!canvasEl.current) return;

    canvasRef.current = new fabric.Canvas(canvasEl.current, {
      backgroundColor: "#f5f5f5",
      width: 584,
      height: 320,
    });

    return () => {
      canvasRef.current?.dispose();
    };
  }, []);

  // Load JSON vào canvas
  const loadCanvasFromJSON = () => {
    if (!canvasRef.current) return;

    try {
      setError("");
      setSuccessMessage("");
      const jsonData = JSON.parse(jsonText);

      canvasRef.current.clear(); // Xóa canvas hiện tại
      canvasRef.current.loadFromJSON(jsonData, () => {
        canvasRef.current?.renderAll();
        setSuccessMessage("✅ Load Canvas thành công!");
      });
    } catch (err) {
      setError("❌ JSON không hợp lệ! Vui lòng kiểm tra lại.");
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} p={2}>
      <Typography variant="h6">Fabric Canvas Loader</Typography>

      <canvas ref={canvasEl} style={{ border: "1px solid black" }} />

      <TextField
        label="Canvas JSON"
        multiline
        rows={6}
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        variant="outlined"
      />
      {error && <Typography color="error">{error}</Typography>}
      {successMessage && <Typography color="primary">{successMessage}</Typography>}

      <Button variant="contained" color="primary" onClick={loadCanvasFromJSON}>
        Load Canvas
      </Button>
    </Box>
  );
};

export default FabricCanvasLoader;
