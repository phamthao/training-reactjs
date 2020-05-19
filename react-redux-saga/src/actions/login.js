import * as types from './index';

export const loginUserAction = (value) => {
  return {
    type: types.LOGIN_USER,
    payload: value
  }
};