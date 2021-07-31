import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { dashboardActions as actions } from '.';
import useFetch from 'api/useFetch';
import { actions as appActions } from 'app/pages/AppMessages/slice';
function* load() {
  try {
    const response = yield call<any>(useFetch, {
      url: '/reports',
      method: 'GET',
    });
    if (response && response.data) {
      const { data } = response;
      yield put(actions.loadReportsSuccess(data));
    }
  } catch (error) {
    yield put(
      appActions.setAppAlert({
        message: error.message,
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}

export function* dashboardSaga() {
  yield takeLatest(actions.loadReports.type, load);
}
