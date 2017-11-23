import {FETCH_CURRENT_USER} from '../action-types/actionTypes';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  user: 'Leo',
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return objectAssign({}, state, {user: action.currentUser});

    default:
      return state;
  }
}
