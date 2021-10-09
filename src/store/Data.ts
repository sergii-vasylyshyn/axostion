import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
      main: {}
  },
  reducers: {
    getData(state, action) {
      state.main = action.payload;
    },
  },
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
