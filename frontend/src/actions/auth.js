import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  ORGANISATION_FETCH,
} from "./types";
import AuthService from "../services/auth.service";
export const register = (username, email, password, fname, lname) => (dispatch) => {
  return AuthService.register(username, email, password,fname, lname).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
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
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      const allOrgs = data.orgFetch

      delete data.orgFetch

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });


      dispatch({
        type: ORGANISATION_FETCH,
        payload: allOrgs,
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
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};