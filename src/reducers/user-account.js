import {UserAccountTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  user: 'Leo',
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_CURRENT_USER:
      return objectAssign({}, state, {user: action.currentUser});

    case types.SIGN_UP_SUCCESS:
      return objectAssign({}, state, {user: action.currentUser.firstName});
    default:
      return state;
  }
}
