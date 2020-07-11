import { combineReducers } from 'redux';

import users from './users/reducer';
import comments from './comments/reducer';

export default combineReducers({
  users,
  comments,
});
