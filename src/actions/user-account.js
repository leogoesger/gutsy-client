import request from 'superagent';
import {set} from 'lodash';
import {UserAccountTypes as types} from '../action-types';

const fetchCurrentUserSuccess = userData => {
  return {
    type: types.FETCH_CURRENT_USER,
    userData,
  };
};

const signUpSuccessObject = currentUser => {
  return {
    type: types.SIGN_UP_SUCCESS,
    currentUser,
  };
};

const url = 'http://localhost:8000';

export function fetchCurrentUser() {
  return async dispatch => {
    await request.get(`${url}/api/areas`);
    const currentUser = 'noelle';
    return dispatch(fetchCurrentUserSuccess(currentUser));
  };
}

export function signUpUser(userData) {
  return async dispatch => {
    const currentUser = await request.post(`${url}/signup`).send(userData);
    set(window.localStorage, 'x-auth', currentUser);
    return dispatch(signUpSuccessObject(userData));
  };
}
