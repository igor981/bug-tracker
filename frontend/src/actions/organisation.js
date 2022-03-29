import { ORGANISATION_FAIL, ORGANISATION_FETCH, ORGANISATION_SUCCESS, ORGANISATION_SWITCH, SET_MESSAGE } from "./types.js";

import orgService from "../services/org.service.js";


export const orgCreate = (userId, orgName, orgDesc) => (dispatch) => {
    return orgService.createOrg(userId, orgName, orgDesc).then(
      (response) => {

        console.log(response);
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

export const getAllOrgs = (userId) => (dispatch) => {
  return orgService.getAllOrgs(userId).then(
    (response) => {
      dispatch({
        type: ORGANISATION_FETCH,
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

    }
  )
}

export const switchActiveOrg = (org) => (dispatch) => {
  return dispatch({
    type: ORGANISATION_SWITCH,
    payload: org
  })
}