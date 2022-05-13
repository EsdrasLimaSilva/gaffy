import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalStorage } from "../helpers/localStorage";

const singleGameSlice = createSlice({
  name: "singleGame",
  initialState: { data: getItemFromLocalStorage("signleGT") || null },
  reducers: {
    dataAdded: (state, { payload }) => {
      state.data = payload;
      localStorage.setItem("singleGT", payload);
    },
  },
});

export const selectSingleGameData = (state) => state.singleGame.data;

export const { dataAdded } = singleGameSlice.actions;
export default singleGameSlice.reducer;
