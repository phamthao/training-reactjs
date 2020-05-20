import { put, call, cancelled, delay } from 'redux-saga/effects';
import { getRequest } from '../../api/Api';

import * as types from '../actions'

export function* login(action) {
  try {
    yield delay(2000);
    const response = yield call(getRequest, 'https://jsonplaceholder.typicode.com/posts/1');
    
    if (response.status === 200 && action.payload.id == response.data.id && action.payload.userId == response.data.userId) {
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

  yield put({ type: types.CANCEL_LOGIN });
}