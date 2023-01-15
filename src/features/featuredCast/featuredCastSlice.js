import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import featureCastService from "./featureCastService";

const initialState = {
  featuredCasts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// GET FEATURED CAST
export const getFeaturedCast = createAsyncThunk(
  "featuredcast/getAll",
  async (_, thunkAPI) => {
    try {
      return await featureCastService.getFeaturedCast();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const featuredCastSlice = createSlice({
  name: "featuredCast",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFeaturedCast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeaturedCast.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.featuredCasts = action.payload;
      })
      .addCase(getFeaturedCast.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = featuredCastSlice.actions;
export default featuredCastSlice.reducer;
