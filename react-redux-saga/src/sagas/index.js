import { takeLatest, fork, take, call, cancel } from 'redux-saga/effects';
import { login, cancelLogin } from './login';
import { getListEmployee } from './employee';

import * as types from '../actions';

function* watchLogin() {
  while(true) {
    yield take(types.LOGIN_USER);
    const task = yield fork(login);
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