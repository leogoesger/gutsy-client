import request from 'superagent';
import {set} from 'lodash';
import {UserAccountTypes as types} from '../action-types';
import {navigateTo} from '../utils/helpers';

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

const loginRequest = () => {
  return {
    type: types.LOG_IN_REQUEST,
  };
};

const loginSuccessObject = currentUser => {
  return {
    type: types.LOG_IN_SUCCESS,
    currentUser,
  };
};

const loginFailObject = currentUser => {
  return {
    type: types.LOG_IN_FAIL,
    currentUser,
  };
};

const url = 'http://localhost:8000';

export function signUpUser(userData) {
  return async dispatch => {
    try {
      dispatch(signUpRequest());
      const currentUser = await request.post(`${url}/signup`).send(userData);
      set(window.localStorage, 'gutsy-jwt', currentUser.text);
      dispatch(signUpSuccessObject(userData));
      navigateTo('/');
    } catch (e) {
      dispatch(signUpFailObject(e.response.body));
    }
  };
}

export function loginUser(userData) {
  return async dispatch => {
    try {
      dispatch(loginRequest());
      const currentUser = await request.post(`${url}/login`).send(userData);
      set(window.localStorage, 'gutsy-jwt', currentUser.text);
      dispatch(loginSuccessObject(userData));
      navigateTo('/');
    } catch (e) {
      dispatch(loginFailObject(e.response.body));
    }
  };
}
