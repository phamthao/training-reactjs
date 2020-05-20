import * as types from './index';

export const loginUserAction = (value) => {
  return {
    type: types.LOGIN_USER,
    payload: value
  }
};

export const cancelLogin = () => {
  return {
    type: types.CANCEL_LOGIN,
  }
};