import * as types from '../actions';

const initState = {
  login: false,
  failNumber: 0,
  lockTime: localStorage.getItem('lockTime') ?? 0,
  message: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        login: true,
      };
    case types.LOGIN_USER_ERROR:
      const failNumber = state.failNumber + 1;
      return {
        ...state,
        failNumber,
        message: action.message,
      };
    default:
      return state;
  }
}
