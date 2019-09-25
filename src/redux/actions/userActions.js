import { toast } from "react-toastify";
import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

export const request = user => {
  return { type: types.CREATE_USER_REQUEST, user };
};

export const success = user => {
  return { type: types.CREATE_USER_SUCCESS, user };
};

export const failure = error => {
  return { type: types.CREATE_USER_FAILURE, error };
};

export const loginSuccess = user => {
  return { type: types.LOGIN_SUCCESS, user };
};

export const loginFailure = error => {
  return { type: types.LOGIN_FAILURE, error };
};

export const loginRequest = user => {
  return { type: types.LOGIN_REQUEST, user };
};

export const signup = user => dispatch => {
  dispatch(request(user));
  userApi
    .signup(user)
    .then(response => {
      if (response.error) {
        toast.error("response.error");
        dispatch(failure(response.error));
      }
      toast.success("User created successfully");
      dispatch(success(user));
    })
    .catch(error => {
      toast.error("Server accounted an error");
      dispatch(failure(error));
    });
};

export const login = user => dispatch => {
  dispatch(loginRequest(user));
  userApi
    .login(user)
    .then(response => {
      if (response.error) {
        toast.error(response.error);
        dispatch(loginFailure(response.error));
      } else {
        toast.success(`Welcome to bank ${response.data.firstname}`);
        sessionStorage.setItem("token", response.data.token);
        dispatch(loginSuccess(response));
      }
    })
    .catch(error => {
      dispatch(loginFailure(error));
    });
};
