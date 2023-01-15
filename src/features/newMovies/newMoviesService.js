import axios from "axios";

// API CONNECTION
const API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=d5fd44215eef00756a68e94999a0527d&language=en-US&page=1";


// GET NEW MOVIES
const getNewMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// EXPORTS
const newMoviesService = {
  getNewMovies,
};

export default newMoviesService;
