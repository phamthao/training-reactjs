import { takeLatest, fork, take, cancel } from 'redux-saga/effects';
import { login } from './login';
import { getListEmployee } from './employee';

import * as types from '../actions';

function* watchLogin() {
  while(true) {   
    const task = yield takeLatest(types.LOGIN_USER, login);
    yield take(types.CANCEL_LOGIN);
    yield cancel(task);
  }
}

function* watchFetchList() {
    yield takeLatest(types.GET_LIST, getListEmployee);
}

function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchFetchList);
}

export default rootSaga;