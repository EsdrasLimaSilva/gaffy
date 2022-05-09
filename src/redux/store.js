import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "./favsSlice";
import gamesReducer from "./gamesSlice";
import singleGameReducer from "./singleGameSlice";

export const store = configureStore({
  reducer: {
    favs: favsReducer,
    games: gamesReducer,
    singleGame: singleGameReducer,
  },
});
