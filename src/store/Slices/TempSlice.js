import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch-items", async () => {
  return [];
});

const TempSlice = createSlice({
  name: "temp-slice",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default TempSlice.reducer;
