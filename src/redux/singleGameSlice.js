import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalStorage } from "../helpers/localStorage";

const singleGameSlice = createSlice({
  name: "singleGame",
  initialState: { data: null },
  reducers: {
    dataAdded: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const selectSingleGameData = (state) => state.singleGame.data;

export const { dataAdded } = singleGameSlice.actions;
export default singleGameSlice.reducer;
