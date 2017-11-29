import {UserAccountTypes as types} from '../action-types';
import objectAssign from 'object-assign';

import {isEmailError} from '../utils/helpers';
import {messagesMap} from '../static-data';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  user: '',
  signUpErrorMessage: null,
  loginErrorMessage: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.SIGN_UP_REQUEST:
      return objectAssign({}, state, {signUpErrorMessage: null});

    case types.SIGN_UP_SUCCESS:
      return objectAssign({}, state, {user: action.currentUser.firstName});

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
      return objectAssign({}, state, {user: 'leo'});

    case types.LOG_IN_FAIL: {
      let loginErrorMessage = null;
      if (isEmailError(action.error)) {
        loginErrorMessage = messagesMap.KNOWN_EMAIL_ERROR;
      }
      return objectAssign({}, state, {loginErrorMessage});
    }

    default:
      return state;
  }
}
