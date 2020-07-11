import { all, takeLatest, call, put } from 'redux-saga/effects';

import types from './types';
import { listByUserSuccess, listByUserFailure } from './actions';

import api from '../../../services/api';

export function* listByUserRequest({ payload }) {
  try {
    const { userId, filters } = payload;

    const { data } = yield call(api.get, `/users/${userId}/posts`, {
      params: filters,
    });

    yield put(listByUserSuccess(data));
  } catch (e) {
    yield put(listByUserFailure());
  }
}

export default all([takeLatest(types.LIST_BY_USER_REQUEST, listByUserRequest)]);
