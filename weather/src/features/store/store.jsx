import { configureStore } from "@reduxjs/toolkit";
import changeDegreReducer from "../redux/changeDegreSlice";
import changeStatusReduer from "../redux/changeStatusSlice";
import weatherReducer from "../redux/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    changeStatus: changeStatusReduer,
    changeDegre: changeDegreReducer,
  },
});
