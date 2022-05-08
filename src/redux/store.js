import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "./favsSlice";
import gamesReducer from "./gamesSlice";

export const store = configureStore({
  reducer: {
    favs: favsReducer,
    games: gamesReducer,
  },
});
