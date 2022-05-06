import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    loading: false,
    gamesList: [],
  },
  reducers: {
    gamesAdded: (state, { payload }) => {
      state.gamesList = payload;
      state.loading = false;
    },
    loadingGames: (state) => {
      state.loading = true;
    },
  },
});

export const selectGames = (state) => state.games.gamesList;
export const selectLoading = (state) => state.games.loading;

export const { gamesAdded, loadingGames } = gamesSlice.actions;
export default gamesSlice.reducer;
