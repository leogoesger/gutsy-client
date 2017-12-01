import {RouteTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  route: null,
  routes: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_ROUTES:
      return objectAssign({}, state, {routes: null});

    case types.FETCH_ROUTES_SUCCESS:
      return objectAssign({}, state, action.routes);

    case types.FETCH_ROUTES_FAIL:
      return objectAssign({}, state, action.error);

    default:
      return state;
  }
}
