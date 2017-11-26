import request from 'superagent';
import * as types from '../action-types/actionTypes';

const fetchCurrentUserSuccess = currentUser => {
  return {
    type: types.FETCH_CURRENT_USER,
    currentUser,
  };
};

export function fetchCurrentUser() {
  return async dispatch => {
    await request.get('http://localhost:8000/api/areas');
    const currentUser = 'noelle';
    return dispatch(fetchCurrentUserSuccess(currentUser));
  };
}
