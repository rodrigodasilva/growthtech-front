import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  loadingList: true,
  usersList: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.LIST_REQUEST: {
        draft.loadingList = true;
        break;
      }
      case types.LIST_SUCCESS: {
        // console.log(state.usersList.users);
        draft.usersList = action.payload.users;
        // draft.usersList = !!state.usersList.users
        //   ? [...state.usersList.users, ...action.payload.users.users]
        //   : action.payload.users;
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
