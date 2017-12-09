import {SubregionTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  subregion: null,
  subregions: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_SUBREGIONS_OBJECT:
      return objectAssign({}, state, {subregions: null});

    case types.FETCH_SUBREGIONS_SUCCESS:
      return objectAssign({}, state, {subregions: action.subregions});

    case types.FETCH_SUBREGIONS_FAIL:
      return objectAssign({}, state, {error: action.error});

    default:
      return state;
  }
}
