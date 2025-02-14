import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CanvasState {
  objects: any[];
  selectedObject: any | null;
}

const initialState: CanvasState = {
  objects: [],
  selectedObject: null,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setObjects: (state, action: PayloadAction<any[]>) => {
      state.objects = action.payload;
    },
    updateSelectedObject: (state, action: PayloadAction<any | null>) => {
      state.selectedObject = action.payload
    },
  },
});

export const { setObjects, updateSelectedObject } = canvasSlice.actions;
export default canvasSlice.reducer;
