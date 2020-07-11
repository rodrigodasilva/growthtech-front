import types from './types';

export const listByUserRequest = ({ userId, filters }) => ({
  type: types.LIST_BY_USER_REQUEST,
  payload: { userId, filters },
});
export const listByUserSuccess = posts => ({
  type: types.LIST_BY_USER_SUCCESS,
  payload: { posts },
});
export const listByUserFailure = () => ({
  type: types.LIST_BY_USER_FAILURE,
});
