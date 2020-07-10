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
