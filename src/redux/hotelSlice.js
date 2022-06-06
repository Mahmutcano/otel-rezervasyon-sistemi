import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Data Fetching Axios
export const fetchHotels = createAsyncThunk("hotels/getHotels", async () => {
  const res = await axios.get(
    `https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotels`
  );
  return res.data;
});

export const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchHotels.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default hotelSlice.reducer;