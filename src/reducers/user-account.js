import {UserAccountTypes as types} from '../action-types';
import objectAssign from 'object-assign';

import {isEmailError} from '../utils/helpers';
import {messagesMap} from '../static-data';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  currentUser: null,
  signUpErrorMessage: null,
  loginErrorMessage: null,
  fetchCurrentUserErrorMessage: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.SIGN_UP_REQUEST:
      return objectAssign({}, state, {signUpErrorMessage: null});

    case types.SIGN_UP_SUCCESS:
      return objectAssign({}, state, {currentUser: action.currentUser});

    case types.SIGN_UP_FAIL: {
      let signUpErrorMessage = null;
      if (isEmailError(action.error)) {
        signUpErrorMessage = messagesMap.KNOWN_EMAIL_ERROR;
      }
      return objectAssign({}, state, {signUpErrorMessage});
    }

    case types.LOG_IN_REQUEST:
      return objectAssign({}, state, {loginErrorMessage: null});

    case types.LOG_IN_SUCCESS:
      return objectAssign({}, state, {currentUser: action.currentUser});

    case types.LOG_IN_FAIL: {
      let loginErrorMessage = null;
      if (isEmailError(action.error)) {
        loginErrorMessage = messagesMap.KNOWN_EMAIL_ERROR;
      }
      return objectAssign({}, state, {loginErrorMessage});
    }

    case types.FETCH_CURRENT_USER_SUCCESS: {
      return objectAssign({}, state, {currentUser: action.currentUser});
    }

    case types.LOG_OUT_USER: {
      return objectAssign({}, state, {currentUser: null});
    }

    default:
      return state;
  }
}
