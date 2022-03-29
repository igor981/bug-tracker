import axios from "axios";
import orgService from "./org.service";
const API_URL = "http://localhost:8080/api/auth/";
const register = (username, email, password, fname, lname) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    fname,
    lname
  });
};
const login = async (username, password) => {
  const userLogin = await axios
  .post(API_URL + "signin", {
    username,
    password,
  })

  if (userLogin.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(userLogin.data));
    const userOrgs = await orgService.getAllOrgs(userLogin.data.id)
    userLogin.data.orgFetch = userOrgs;


    return userLogin.data 
  }
  return userLogin.data 
};
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("organisations");
};
export default {
  register,
  login,
  logout,
};