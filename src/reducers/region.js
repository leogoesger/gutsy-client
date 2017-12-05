import {RegionTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  region: null,
  regions: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_REGIONS_OBJECT:
      return objectAssign({}, state, {regions: null});

    case types.FETCH_REGIONS_SUCCESS:
      return objectAssign({}, state, {regions: action.regions});

    case types.FETCH_REGIONS_FAIL:
      return objectAssign({}, state, {error: action.error});

    default:
      return state;
  }
}
