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
    case types.FETCH_SUBAREAS_OBJECT:
      return objectAssign({}, state, {subareas: null});

    case types.FETCH_SUBAREAS_SUCCESS:
      return objectAssign({}, state, {subareas: action.subareas});

    case types.FETCH_SUBAREAS_FAIL:
      return objectAssign({}, state, {error: action.error});

    case types.FETCH_SUBAREA_OBJECT:
      return objectAssign({}, state, {subarea: null});

    case types.FETCH_SUBAREA_SUCCESS:
      return objectAssign({}, state, {subarea: action.subarea});

    case types.FETCH_SUBAREA_FAIL:
      return objectAssign({}, state, {error: action.error});

    default:
      return state;
  }
}
