import request from 'superagent';
import {set} from 'lodash';
import {UserAccountTypes as types} from '../action-types';

const signUpRequest = () => {
  return {
    type: types.SIGN_UP_REQUEST,
  };
};

const signUpSuccessObject = currentUser => {
  return {
    type: types.SIGN_UP_SUCCESS,
    currentUser,
  };
};

const signUpFailObject = error => {
  return {
    type: types.SIGN_UP_FAIL,
    error,
  };
};

const url = 'http://localhost:8000';

export function signUpUser(userData) {
  return async dispatch => {
    try {
      dispatch(signUpRequest());
      const currentUser = await request
        .post(`${url}/signup`)
        .send(userData)
        .type('json');
      set(window.localStorage, 'x-auth', currentUser);
      dispatch(signUpSuccessObject(userData));
    } catch (e) {
      dispatch(signUpFailObject(e.response.body));
    }
  };
}
