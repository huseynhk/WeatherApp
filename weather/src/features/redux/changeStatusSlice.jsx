import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: true,
};

const changeStatusSlice = createSlice({
  name: "changeStatus",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.isDark = !action.payload;
    },
  },
});

export const { changeStatus } = changeStatusSlice.actions;
export default changeStatusSlice.reducer;
