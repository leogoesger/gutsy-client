import {SharedTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  message: '',
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.USER_CLIMB_OBJECT:
      return objectAssign({}, state, {message: ''});

    case types.UNKOWN_ERROR_OBJECT:
      return objectAssign({}, state, {message: 'Unknown Error'});

    case types.ADD_TODO_OBJECT:
      return objectAssign({}, state, {
        message: 'Added climb to your Todo list',
      });

    case types.ADD_COMPLETION_OBJECT:
      return objectAssign({}, state, {
        message: 'Added climb to your Completion list',
      });

    case types.REMOVE_USER_CLIMB_OBJECT:
      return objectAssign({}, state, {
        message: 'Removed climb from your list',
      });
    default:
      return state;
  }
}
