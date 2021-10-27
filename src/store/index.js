import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import { pix2CodeApi } from "../services/pix2Code";

export const store = configureStore({
  reducer: {
    image: imageReducer,
    // Add the generated reducer as a specific top-level slice
    [pix2CodeApi.reducerPath]: pix2CodeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pix2CodeApi.middleware),
});
