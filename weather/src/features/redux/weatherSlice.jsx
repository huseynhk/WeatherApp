import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPrognos = createAsyncThunk("/getPrognos/", async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      city === undefined ? "New York" : city
    }&appid=d32bd17e782e54a0729a829c462c76ac`;
    const response = await axios.get(url);

    const timezoneUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely,hourly,daily&appid=d32bd17e782e54a0729a829c462c76ac`;
    const timezoneResponse = await axios.get(timezoneUrl);

    return {
      ...response.data,
      timezone: timezoneResponse.data.timezone,
    };
  } catch (error) {
    throw error;
  }
});

const initialState = {
  situation: {
    isLoading: false,
    error: null,
  },
  data: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrognos.pending, (state) => {
        state.situation.isLoading = true;
        state.situation.error = null;
      })
      .addCase(getPrognos.fulfilled, (state, action) => {
        if (action.payload.cod === "404") {
          state.data = "city not found";
        }
        state.situation.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getPrognos.rejected, (state, action) => {
        state.situation.isLoading = false;
        state.situation.error = action.error.message;
        console.log(action.error.message && action.error.message);
      });
  },
});

export default weatherSlice.reducer;
