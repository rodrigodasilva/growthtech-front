import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  loadingList: false,
  usersList: [],
  loadingUserShow: false,
  user: {},
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.LIST_REQUEST: {
        draft.loadingList = true;
        break;
      }
      case types.LIST_SUCCESS: {
        draft.usersList = action.payload.users;
        draft.loadingList = false;
        break;
      }
      case types.LIST_FAILURE: {
        draft.loadingList = false;
        break;
      }

      case types.SHOW_REQUEST: {
        draft.loadingUserShow = true;
        break;
      }
      case types.SHOW_SUCCESS: {
        draft.user = action.payload.user;
        draft.loadingUserShow = false;
        break;
      }
      case types.SHOW_FAILURE: {
        draft.loadingUserShow = false;
        break;
      }

      case types.RESET_USERS_STATE: {
        draft.usersList = [];
        draft.loadingUserShow = false;
        draft.loadingList = false;
        draft.user = {};
        break;
      }

      default:
    }
  });
}
