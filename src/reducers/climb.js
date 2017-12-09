import {ClimbTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  climb: null,
  climbs: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_CLIMBS_OBJECT:
      return objectAssign({}, state, {climbs: null});

    case types.FETCH_CLIMBS_SUCCESS:
      return objectAssign({}, state, {climbs: action.climbs});

    case types.FETCH_CLIMBS_FAIL:
      return objectAssign({}, state, {error: action.error});

    case types.FETCH_CLIMB_OBJECT:
      return objectAssign({}, state, {climb: null});

    case types.FETCH_CLIMB_SUCCESS:
      return objectAssign({}, state, {climb: action.climb});

    case types.FETCH_CLIMB_FAIL:
      return objectAssign({}, state, {error: action.error});

    default:
      return state;
  }
}
