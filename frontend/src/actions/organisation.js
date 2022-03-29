import { ORGANISATION_FAIL, ORGANISATION_SUCCESS, SET_MESSAGE } from "./types.js";

import orgService from "../services/org.service.js";


export const orgCreate = (userId, orgName, orgDesc) => (dispatch) => {
    return orgService.createOrg(userId, orgName, orgDesc).then(
      (response) => {
        dispatch({
          type: ORGANISATION_SUCCESS,
          payload: response.data,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: ORGANISATION_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
}