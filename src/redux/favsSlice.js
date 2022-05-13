import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalStorage } from "../helpers/localStorage";

export const favsSlice = createSlice({
  name: "favs",
  initialState: {
    gamesFavs: JSON.parse(getItemFromLocalStorage("gamesFavs")) || [],
  },
  reducers: {
    gameAddedFav: (state, { payload }) => {
      state.gamesFavs.push(payload);
      localStorage.setItem("gamesFavs", JSON.stringify(state.gamesFavs));
    },
    gameRemovedFav: (state, { payload }) => {
      state.gamesFavs = state.gamesFavs.filter((game) => game.id !== payload);
      localStorage.setItem("gamesFavs", JSON.stringify(state.gamesFavs));
    },
  },
});
export const selectGamesFav = (state) => state.favs.gamesFavs;

export const { gameAddedFav, gameRemovedFav } = favsSlice.actions;
export default favsSlice.reducer;
