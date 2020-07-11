import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  loadingList: true,
  postsList: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.LIST_BY_USER_REQUEST: {
        draft.loadingPostsList = true;
        break;
      }
      case types.LIST_BY_USER_SUCCESS: {
        draft.postsList = action.payload.posts;
        draft.loadingPostsList = false;
        break;
      }
      case types.LIST_BY_USER_FAILURE: {
        draft.loadingPostsList = false;
        break;
      }

      default:
    }
  });
}
