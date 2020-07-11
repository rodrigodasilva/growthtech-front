import { all, takeLatest, call, put } from 'redux-saga/effects';

import types from './types';
import { listSuccess, listFailure } from './actions';

import api from '../../../services/api';

export function* commentsRequest({ payload }) {
  try {
    const { postId } = payload;

    const { data } = yield call(api.get, `/posts/${postId}/comments`);

    yield put(listSuccess(data));
  } catch (e) {
    yield put(listFailure());
  }
}

export default all([takeLatest(types.LIST_REQUEST, commentsRequest)]);
