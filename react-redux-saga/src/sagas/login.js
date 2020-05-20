import { put, call, delay, cancelled } from 'redux-saga/effects';
import { getRequest, postRequest } from '../services/services';

import * as types from '../actions'

export function* login(payload) {
  try {
    // yield delay(3000);

    const response = yield call(getRequest, 'http://dummy.restapiexample.com/api/v1/employee/1');

    if (response.status === 200) {
      yield put({ type: types.LOGIN_USER_SUCCESS, response });
    } else {
      yield put({ type: types.LOGIN_USER_ERROR, message: 'Login fail' });
    }
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, message: 'Login fail' });
  } finally {
    if (yield cancelled()) {
      yield put({ type: types.LOGIN_USER_ERROR, message: 'Cancel login' });
    }
  }
}