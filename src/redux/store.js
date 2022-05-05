import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "./favsSlice";

export const store = configureStore({
  reducer: {
    favorties: favsReducer,
  },
});
