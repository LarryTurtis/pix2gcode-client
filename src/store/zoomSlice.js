import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const zoomSlice = createSlice({
  name: "zoom",
  initialState,
  reducers: {
    zoom: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { zoom } = zoomSlice.actions;

export default zoomSlice.reducer;
