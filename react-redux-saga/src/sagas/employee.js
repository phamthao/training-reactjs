import { put, call, delay  } from 'redux-saga/effects';
import { getRequest } from '../services/services';

import * as types from '../actions'

export function* getListEmployee(payload) {
  try {
    const response = yield call(getRequest, 'http://dummy.restapiexample.com/api/v1/employees'); 
    yield delay(3000);
    if (response.status === 200) {
      yield put({ type: types.GET_LIST_SUCCESS, response });
    } else {
      yield put({ type: types.GET_LIST_ERROR });
    }
  } catch(error) {
    yield put({ type: types.GET_LIST_ERROR, error });
  }
}