import { all } from 'redux-saga/effects';

import users from './users/sagas';
import comments from './comments/sagas';

export default function* rootSaga() {
  return yield all([users, comments]);
}
