import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import { adminActions as actions } from '.';
import { actions as appActions } from 'app/pages/AppMessages/slice';
import pageData from '../../';
import { getErrorMessage } from 'utils/functions';
import useFetch from 'api/useFetch';
import routes from 'api/routes';
function* loadListsOfData(action) {
  try {
    const response = yield call<any>(useFetch, {
      url: routes[action.payload.stateIndex]['findAll'],
      method: 'GET',
    });
    const stateIndex = action.payload.stateIndex;
    if (response && response.data) {
      const { data } = response;
      yield put(
        actions.getAllSuccess({
          data: data.map(d => ({ ...d, id: d._id })),
          stateIndex,
        }),
      );
    }
  } catch (err) {
    yield put(actions.setLoading(false));
    yield put(
      appActions.setAppAlert({
        message: err.message,
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}

function* createResource(action) {
  try {
    const response = yield call<any>(useFetch, {
      url: routes[action.payload.stateIndex]['createOne'],
      method: 'POST',
      data: action.payload.data,
    });
    const stateIndex = action.payload.stateIndex;
    yield put(actions.getAll({ stateIndex }));
    yield put(
      appActions.setAppAlert({
        message: 'created successfully',
        severity: 'success',
        autoHideIn: 2000,
      }),
    );
    yield put(actions.setLoading(false));
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(
      appActions.setAppAlert({
        message: error.message,
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}

function* updateResource(action) {
  try {
    const stateIndex = action.payload.stateIndex;
    const response = yield call<any>(useFetch, {
      url: routes[action.payload.stateIndex]['updateOne'](action.payload.id),
      method: 'PATCH',
      data: action.payload.data,
    });
    yield put(actions.setLoading(false));
    yield put(actions.getAll({ stateIndex }));

    yield put(
      appActions.setAppAlert({
        message: 'updated successfully',
        severity: 'success',
        autoHideIn: 2000,
      }),
    );
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(
      appActions.setAppAlert({
        message: error.message,
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}

function* deleteResource(action) {
  try {
    const stateIndex = action.payload.stateIndex;
    const response = yield call<any>(useFetch, {
      url: routes[action.payload.stateIndex]['deleteOne'](action.payload.id),
      method: 'DELETE',
      data: action.payload.data,
    });
    yield put(actions.getAll({ stateIndex }));
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(
      appActions.setAppAlert({
        message: error.message,
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}
export function* adminSaga() {
  yield all([
    takeLatest(actions.getAll.type, loadListsOfData),
    takeLatest(actions.create.type, createResource),
    takeLatest(actions.update.type, updateResource),
    takeLatest(actions.delete.type, deleteResource),
  ]);
}
