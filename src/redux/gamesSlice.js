import { createSlice } from "@reduxjs/toolkit";
import {
  getItemFromLocalStorage,
  setItemLocalStorage,
} from "../helpers/localStorage";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    loading: false,
    currentTag: null,
    currentOption: null,
    lastTag: getItemFromLocalStorage("ltTag") || null,
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
    setCurrentTag: (state, { payload }) => {
      state.currentTag = payload;
    },
    setCurrentOption: (state, { payload }) => {
      state.currentOption = payload;
    },
    setLastTag: (state, { payload }) => {
      state.lastTag = payload;
    },
  },
});

export const selectGames = (state) => state.games.gamesList;
export const selectLoading = (state) => state.games.loading;
export const selectCurrentTag = (state) => state.games.currentTag;
export const selectCurrentOption = (state) => state.games.currentOption;
export const selectLastTag = (state) => state.games.lastTag;

export const {
  gamesAdded,
  loadingGames,
  setCurrentTag,
  setCurrentOption,
  setLastTag,
} = gamesSlice.actions;
export default gamesSlice.reducer;
