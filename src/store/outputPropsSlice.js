import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pixelSize: 4,
  pixelShading: 0,
};

export const outputPropsSlice = createSlice({
  name: "outputProps",
  initialState,
  reducers: {
    updatePixelSize: (state, action) => {
      state.pixelSize = action.payload;
    },
    updatePixelShading: (state, action) => {
      state.pixelShading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePixelSize, updatePixelShading } = outputPropsSlice.actions;

export default outputPropsSlice.reducer;
