import * as types from "./actionTypes";

export const createUser = user => {
  return { type: types.CREATE_USER_REQUEST };
};
