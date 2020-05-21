import * as types from './index';

export const loginAction = (value) => ({
  type: types.LOGIN_USER,
  payload: value,
});

export const cancelLoginAction = () => ({
  type: types.CANCEL_LOGIN,
});
