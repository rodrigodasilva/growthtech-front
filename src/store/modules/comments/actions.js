import types from './types';

export const listRequest = ({ postId }) => ({
  type: types.LIST_REQUEST,
  payload: { postId },
});
export const listSuccess = comments => ({
  type: types.LIST_SUCCESS,
  payload: { comments },
});
export const listFailure = () => ({
  type: types.LIST_FAILURE,
});
