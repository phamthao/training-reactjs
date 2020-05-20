import { takeLatest } from 'redux-saga/effects';
import { login, cancelLogin } from './login';
import { getListEmployee } from './employee';

import * as types from '../actions';

export default function* watchers() {
    const task = yield takeLatest(types.LOGIN_USER, login);
    yield takeLatest(types.CANCEL_LOGIN, cancelLogin, task);
    yield takeLatest(types.GET_LIST, getListEmployee);
}