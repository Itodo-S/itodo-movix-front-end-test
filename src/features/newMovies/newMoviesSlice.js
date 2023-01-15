import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newMoviesService from "./newMoviesService";

const initialState = {
  newMovies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// GET NEW MOVIES
export const getNewMovies = createAsyncThunk(
  "new/getAll",
  async (_, thunkAPI) => {
    try {
      return await newMoviesService.getNewMovies();
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

export const newMoviesSlice = createSlice({
  name: "newMovie",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getNewMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newMovies = action.payload;
      })
      .addCase(getNewMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = newMoviesSlice.actions;
export default newMoviesSlice.reducer;
