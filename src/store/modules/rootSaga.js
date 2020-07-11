import { all } from 'redux-saga/effects';

import users from './users/sagas';
import posts from './posts/sagas';

export default function* rootSaga() {
  return yield all([users, posts]);
}
