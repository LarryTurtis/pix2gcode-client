import { createSlice } from "@reduxjs/toolkit";

const DEFAULT = 100;

const initialState = {
  value: DEFAULT,
};

export const zoomSlice = createSlice({
  name: "zoom",
  initialState,
  reducers: {
    zoom: (state, action) => {
      state.value = action.payload;
    },
    zoomToDefault: (state) => {
      state.value = DEFAULT;
    },
  },
});

// Action creators are generated for each case reducer function
export const { zoom, zoomToDefault } = zoomSlice.actions;

export default zoomSlice.reducer;
