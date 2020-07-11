import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  loadingList: true,
  comments: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.LIST_REQUEST: {
        draft.loadingList = true;
        break;
      }
      case types.LIST_SUCCESS: {
        draft.comments = action.payload.comments;
        draft.loadingList = false;
        break;
      }
      case types.LIST_FAILURE: {
        draft.loadingList = false;
        break;
      }

      default:
    }
  });
}
