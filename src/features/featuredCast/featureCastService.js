import axios from "axios";

// API CONNECTION
const API_URL =
  "https://api.themoviedb.org/3/person/3/movie_credits?api_key=d5fd44215eef00756a68e94999a0527d&language=en-US";

// GET FEATUERED CAST
const getFeaturedCast = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// EXPORTS 
const featuredCastService = {
  getFeaturedCast,
};

export default featuredCastService;
