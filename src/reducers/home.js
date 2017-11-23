import {FETCH_CURRENT_USER} from '../action-types/actionTypes';
import objectAssign from 'object-assign';

const initialState = {
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return objectAssign({}, state, {user: action});

    default:
      return state;
  }
}
