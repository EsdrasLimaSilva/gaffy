import { createSlice } from "@reduxjs/toolkit";

export const favsSlice = createSlice({
  name: "favs",
  initialState: {
    gamesFavs: [],
  },
  reducers: {
    gameAddedFav: (state, { payload }) => {
      state.gamesFavs.push(payload);
    },
    gameRemovedFav: (state, { payload }) => {
      state.gamesFavs = state.gamesFavs.filter((game) => game.id !== payload);
    },
  },
});
export const selectGamesFav = (state) => state.favs.gamesFavs;

export const { gameAddedFav, gameRemovedFav } = favsSlice.actions;
export default favsSlice.reducer;
