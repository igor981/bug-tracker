import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import organisation from "./organisationReducer";
export default combineReducers({
  auth,
  message,
  organisation
});