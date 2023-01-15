import axios from "axios";

// API CONNECTION
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=d5fd44215eef00756a68e94999a0527d&language=en-US&page=1";

// GET POPULAR MOVIES
const getPopularMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// EXPORTS
const popularMoviesService = {
  getPopularMovies,
};

export default popularMoviesService;
