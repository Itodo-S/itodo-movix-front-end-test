import axios from "axios";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=d5fd44215eef00756a68e94999a0527d&language=en-US&page=1";

const getPopularMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const popularMoviesService = {
  getPopularMovies,
};

export default popularMoviesService;
