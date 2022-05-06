import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    fetching: false,
    games: [],
  },
  reducers: {
    gamesAdded: (state, { payload }) => {
      state.games[0] = payload;
    },
  },
});

export const { gamesAdded } = gamesSlice;
export default gamesSlice.reducer;
