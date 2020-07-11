import types from './types';

export const listRequest = filters => ({
  type: types.LIST_REQUEST,
  payload: { filters },
});
export const listSuccess = users => ({
  type: types.LIST_SUCCESS,
  payload: { users },
});
export const listFailure = () => ({
  type: types.LIST_FAILURE,
});

export const showUserRequest = ({ userId }) => ({
  type: types.SHOW_REQUEST,
  payload: { userId },
});
export const showSuccess = user => ({
  type: types.SHOW_SUCCESS,
  payload: { user },
});
export const showFailure = () => ({
  type: types.SHOW_FAILURE,
});

export const resetUsersState = () => ({
  type: types.RESET_USERS_STATE,
});
