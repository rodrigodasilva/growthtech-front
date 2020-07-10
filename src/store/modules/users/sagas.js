import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import types from './types';
import { listSuccess, listFailure } from './actions';

import api from '../../../services/api';

export function* usersRequest({ payload }) {
  try {
    const { filters } = payload;

    const { data } = yield call(api.get, '/users', {
      params: filters,
    });

    const loadedUsersData = yield select(({ users }) => users);

    if (filters.page > 1) {
      const { users, ...paginationInfo } = data;

      const newUsersData = {
        users: [...loadedUsersData.usersList.users, ...data.users],
        ...paginationInfo,
      };

      yield put(listSuccess(newUsersData));
    } else {
      yield put(listSuccess(data));
    }
  } catch (e) {
    yield put(listFailure());
  }
}

export default all([takeLatest(types.LIST_REQUEST, usersRequest)]);
