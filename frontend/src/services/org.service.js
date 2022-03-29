import axios from "axios";
const API_URL = "http://localhost:8080/api/organisation/";
const createOrg = (userId, orgName, orgDesc) => {
  return axios.post(API_URL + "create", {
    userId,
    orgName,
    orgDesc
  });
};

const deleteOrg = (orgId) => {
  return axios.post(API_URL + 'delete', {
    orgId
  })
}

const getAllOrgs = async (userId) => {
  const allOrgs = await axios.post(API_URL + 'getAll', {
    userId
  })
  return allOrgs.data.allOrgs
}


export default {
    createOrg,
    deleteOrg,
    getAllOrgs
  };