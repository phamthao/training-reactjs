import { put, call } from 'redux-saga/effects';
import { getRequest } from '../services/services';

import * as types from '../actions'

export function* loginSaga(payload) {
  try {
    const response = yield call(getRequest, 'http://dummy.restapiexample.com/api/v1/employees'); 
      
    if (response.status === 200) {
      yield put({ type: types.LOGIN_USER_SUCCESS, response });
    } else {
      yield put({ type: types.LOGIN_USER_ERROR });
    }
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}