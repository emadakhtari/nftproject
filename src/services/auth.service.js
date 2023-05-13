import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL + "/api/";

const login = (walletAddress) => {
  return axios
    .post(API_URL + "login", {
      walletAddress: walletAddress,
    })
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
    //   console.log(JSON.stringify(response.data));
      return response.data;
    });
};

const logout = () => {

  localStorage.removeItem("user");
  localStorage.removeItem("account");
  return axios.post(API_URL + "logout", {
  }).then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  //  localStorage.removeItem("user");
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
