import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isKelvin: false,
};
const changeDegreSlice = createSlice({
  name: "changeDegre",
  initialState,
  reducers: {
    changeDegree: (state, action) => {
      state.isKelvin = action.payload;
    },
  },
});
export const { changeDegree } = changeDegreSlice.actions;
export default changeDegreSlice.reducer;
