import * as types from '../action-types/actionTypes';

const fetchCurrentUserSuccess = currentUser => {
  return {
    type: types.FETCH_CURRENT_USER,
    currentUser,
  };
};
export function fetchCurrentUser() {
  return function(dispatch) {
    const currentUser = 'noelle';
    return dispatch(fetchCurrentUserSuccess(currentUser));
  };
}
