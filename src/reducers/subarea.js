import {SubareaTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  subarea: null,
  subareas: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_AREAS_OBJECT:
      return objectAssign({}, state, {subareas: null});

    case types.FETCH_AREAS_SUCCESS:
      return objectAssign({}, state, {subareas: action.subareas});

    case types.FETCH_AREAS_FAIL:
      return objectAssign({}, state, {error: action.error});

    default:
      return state;
  }
}
