import { createSlice } from "@reduxjs/toolkit";

export const favsSlice = createSlice({
  name: "favs",
  initialState: [],
  reducers: {
    gameAdded: (state, { payload }) => {
      state.push(payload);
    },
    gameRemoved: (state, { payload }) => {
      state.filter((game) => game.id !== payload);
    },
  },
});

export const { gameAdded, gameRemoved } = favsSlice.actions;
export default favsSlice.reducer;
