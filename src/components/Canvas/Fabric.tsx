import React, { useEffect, useRef, useState } from "react";
import { useFabricCanvas } from "../../hooks";
import * as fabric from "fabric";
import Grid from "@mui/material/Grid2";
import { IconButton } from "@mui/material";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import RemoveIcon from "@mui/icons-material/Remove";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { CircleOutlined } from "@mui/icons-material";

type ActionButtonTool = {
  action: String,
  displayComponent: React.ReactNode,
  callback?: Function
}


const FabricCanvas: React.FC = () => {
  const { canvas, canvasRef } = useFabricCanvas();
  
  canvas?.on("selection:created", (e) => {
    setSelectedObject(e.selected ? e.selected[0] : null);
  });
  canvas?.on("mouse:up", () => {
    const obj = canvas.getActiveObject();
    if (obj) {
      console.log("Drag End at:", obj.left, obj.top);
    }
  });

  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);

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
    const text = new fabric.IText("Enter text...", {
      left: 150,
      top: 200,
      fontSize: 20,
      fill: "black",
      editable: true,
    });
    canvas?.add(text);
  };

  const buttons: ActionButtonTool[] = [
    {
      action: 'pantool',
      displayComponent: <PanToolAltIcon />
    },
    {
      action: 'fitScreen',
      displayComponent: <FitScreenIcon />
    },
    {
      action: 'addRectangle',
      displayComponent: <CropSquareIcon />,
      callback: addRectangle
    },
    {
      action: 'addTriangle',
      displayComponent: <ChangeHistoryIcon />
    },
    {
      action: 'addCircle',
      displayComponent: <CircleOutlined />,
      callback: addCircle
    },
    {
      action: 'addLine',
      displayComponent: <RemoveIcon />
    },
    {
      action: 'addText',
      displayComponent: <TextFieldsIcon />,
      callback: addText
    }
  ]

  const handleActions = (action: ActionButtonTool) => {
    if (action.callback) {
      action.callback();
    }
    
  }

  return (
    <>
      <Grid container sx={{ height: '100%' }}>
        <Grid size={12}>
          <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
        </Grid>
        <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px' }}>
          {
            buttons.map(button => (
              <IconButton key={button.action} onClick={() => handleActions(button)}>
                {
                  button.displayComponent
                }
              </IconButton>
            ))
          }
        </Grid>
        <Grid size={12}>
          { JSON.stringify(selectedObject) }
        </Grid>
      </Grid>
    </>
  );
};

export default FabricCanvas;
