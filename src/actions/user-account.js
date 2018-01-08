import request from 'superagent';
import {set, unset} from 'lodash';
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

const loginFailObject = error => {
  return {
    type: types.LOG_IN_FAIL,
    error,
  };
};

const fetchCurrentUserSuccess = currentUser => {
  return {
    type: types.FETCH_CURRENT_USER_SUCCESS,
    currentUser,
  };
};

const logOutUserObject = () => {
  return {
    type: types.LOG_OUT_USER,
  };
};

const openDialogObject = () => {
  return {
    type: types.OPEN_DIALOG,
  };
};

const closeDialogObject = () => {
  return {
    type: types.CLOSE_DIALOG,
  };
};

const url = 'http://localhost:8000';

export function signUpUser(userData) {
  return async dispatch => {
    try {
      dispatch(signUpRequest());
      const signUpReponse = await request.post(`${url}/signup`).send(userData);
      set(window.localStorage, 'gutsyJwt', signUpReponse.body.gutsyJwt);
      dispatch(closeDialogObject());
      await dispatch(signUpSuccessObject(signUpReponse.body.fetchUser));
    } catch (e) {
      dispatch(signUpFailObject(e.response.body));
    }
  };
}

export function loginUser(userData) {
  return async dispatch => {
    try {
      dispatch(loginRequest());
      const loginResponse = await request.post(`${url}/login`).send(userData);
      set(window.localStorage, 'gutsyJwt', loginResponse.body.gutsyJwt);
      dispatch(loginSuccessObject(loginResponse.body.user));
      dispatch(closeDialogObject());
    } catch (e) {
      dispatch(loginFailObject(JSON.parse(e.response.text).message));
    }
  };
}

export function fetchCurrentUser() {
  return async dispatch => {
    try {
      const gutsyJwt = window.localStorage.gutsyJwt;
      const fetchUserResponse = await request
        .get(`${url}/users/me`)
        .set('gutsyJwt', gutsyJwt);
      dispatch(fetchCurrentUserSuccess(fetchUserResponse.body));
    } catch (e) {
      unset(window.localStorage, 'gutsyJwt');
      navigateTo('/');
    }
  };
}

export function logOutUser() {
  return dispatch => {
    unset(window.localStorage, 'gutsyJwt');
    dispatch(logOutUserObject());
    navigateTo('/');
  };
}

export function openDialog() {
  return dispatch => {
    dispatch(openDialogObject());
  };
}

export function closeDialog() {
  return dispatch => {
    dispatch(closeDialogObject());
  };
}
