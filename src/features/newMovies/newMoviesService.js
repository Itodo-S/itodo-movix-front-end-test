import axios from "axios";
const API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=d5fd44215eef00756a68e94999a0527d&language=en-US&page=1";

const getNewMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const newMoviesService = {
  getNewMovies,
};

export default newMoviesService;
