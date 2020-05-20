import * as types from '../actions';

const initState = {
  login: false,
  message: null
};

export default function(state = initState, action) {
  console.log(action);
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { 
        ...state, 
        login: true
      };
    case types.LOGIN_USER_ERROR:
      return { 
        ...state, 
        message: action.message
      };
    default:
      return state;
  }
};

