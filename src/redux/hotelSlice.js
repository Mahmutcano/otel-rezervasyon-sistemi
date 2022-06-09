import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Data Fetching Axios
export const fetchHotels = createAsyncThunk("hotels/getHotels", async () => {
  const res = await axios.get(
    `https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotels`
  );
  return res.data;
});

// Data Fetching Axios
export const fetchHotelsDetails = createAsyncThunk(
  "hotel-details/getHotels",
  async () => {
    const res = await axios.get(
      `https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotel-details`
    );
    return res.data;
  }
);
export const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchHotelsDetails.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchHotelsDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchHotelsDetails.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [fetchHotels.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchHotels.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchHotels.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default hotelSlice.reducer;
