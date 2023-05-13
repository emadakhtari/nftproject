import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/api/home/",;

const getPublicContent = () => {
  return axios.post(API_URL);
};


const UserService = {
  getPublicContent,
}

export default UserService;