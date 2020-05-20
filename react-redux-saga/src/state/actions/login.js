import * as types from './index';

export const loginAction = (value) => {
  return {
    type: types.LOGIN_USER,
    payload: value
  }
};

export const cancelLoginAction = () => {
  return {
    type: types.CANCEL_LOGIN,
  }
};