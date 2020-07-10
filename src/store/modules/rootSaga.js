import { all } from 'redux-saga/effects';

import users from './users/sagas';

export default function* rootSaga() {
  return yield all([users]);
}
