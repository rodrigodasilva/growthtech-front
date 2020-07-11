import { combineReducers } from 'redux';

import users from './users/reducer';
import posts from './posts/reducer';

export default combineReducers({
  users,
  posts,
});
