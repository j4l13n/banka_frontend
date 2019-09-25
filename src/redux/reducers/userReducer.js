import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_USER_REQUEST:
      return {};
    case types.CREATE_USER_SUCCESS:
      return { registering: true };
    case types.CREATE_USER_FAILURE:
      return {};
    case types.LOGIN_REQUEST:
      return {};
    case types.LOGIN_SUCCESS:
      return { loggedin: true };
    case types.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
}
