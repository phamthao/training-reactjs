import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './login';
import { getListEmployee } from './employee';

import * as types from '../actions';

export default function* watchers() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.GET_LIST, getListEmployee);
}