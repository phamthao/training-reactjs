import * as types from '../actions';

const initState = {
  list: {},
};

export default function(state = initState, action) {
  switch(action.type) {
    case types.GET_LIST_SUCCESS:
      const list = action.response.data.data;
      return { 
        ...state, 
        list
      };
    case types.GET_LIST_ERROR:
      return { 
        ...state
      };
    default:
      return state;
  }
};

