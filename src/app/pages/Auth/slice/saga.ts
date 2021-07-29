import useFetch from 'api/useFetch';
import routes from 'api/routes';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { authActions as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import { actions as appActions } from 'app/pages/AppMessages/slice';
import { getErrorMessage } from 'utils/functions';

// function* doSomething() {}

function* authenticateUser(action) {
  console.log(action);
  try {
    const response = yield call<any>(useFetch, {
      url: '/auth/login',
      method: 'POST',
      data: action.payload,
    });
    console.log(response.message);
    localStorage.setItem('Access_Token', response.data.access);
    yield put(actions.authenticated(response.data.user));
    yield put(
      appActions.setAppAlert({
        message: `Welcome ${response.data.user.firstName}`,
        severity: 'success',
        autoHideIn: 1500,
      }),
    );
    yield put(appActions.setRedirectTo('/admin/dashboard'));
  } catch (error) {
    console.log(error);
    yield put(
      appActions.setAppAlert({
        message: error.message,
        severity: 'error',
        autoHideIn: 1500,
      }),
    );
  }
}

export function* authSaga() {
  yield takeLatest(actions.authenticate.type, authenticateUser);
}
