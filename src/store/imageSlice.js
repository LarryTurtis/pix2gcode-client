import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageUrl: "",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    upload: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.imageUrl = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { upload } = imageSlice.actions;

export default imageSlice.reducer;
