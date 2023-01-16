import axios from "axios";

const API_URL = "https://mauve-gharial-wrap.cyclic.app/api/users/";

// REGISTER USER
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // SETS USER TO LOCAL STORAGE WHEN SIGNUP SUCCESSFUL
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// LOGIN USER
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  // SETS USER TO LOCAL STORAGE WHEN LOGIN SUCCESSFUL
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// LOGOUT USER
const logout = () => {
  localStorage.removeItem("user");
};

// EXPORTS
const authService = {
  register,
  logout,
  login,
};

export default authService;
