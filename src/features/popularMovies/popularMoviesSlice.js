import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import popularMoviesService from "./popularMoviesService";

const initialState = {
    popularMovies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };
  
  // GET STORE PRODUCTS
  export const getPopularMovies = createAsyncThunk(
    "popular/getAll",
    async (_, thunkAPI) => {
      try {
        return await popularMoviesService.getPopularMovies();
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
  
  
  export const popularMoviesSlice = createSlice({
    name: "popularMovie",
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(getPopularMovies.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getPopularMovies.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.popularMovies = action.payload;
        })
        .addCase(getPopularMovies.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
    },
  });
  
  export const { reset } = popularMoviesSlice.actions;
  export default popularMoviesSlice.reducer;