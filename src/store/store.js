import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from "../features/popularMovies/popularMoviesSlice";
import newMoviesReducer from "../features/newMovies/newMoviesSlice";
import featuredCastReducer from "../features/featuredCast/featuredCastSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    newMovies: newMoviesReducer,
    featuredCasts: featuredCastReducer,
    auth: authReducer,
  },
});
