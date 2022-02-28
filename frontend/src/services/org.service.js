import axios from "axios";
const API_URL = "http://localhost:8080/api/organisation/";
const createOrg = (userId, orgName, orgDesc) => {
  return axios.post(API_URL + "create", {
    userId,
    orgName,
    orgDesc
  });
};


export default {
    createOrg
  };