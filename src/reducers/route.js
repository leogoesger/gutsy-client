import {RouteTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  route: null,
  routes: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_ROUTES_OBJECT:
      return objectAssign({}, state, {routes: null});

    case types.FETCH_ROUTES_SUCCESS:
      return objectAssign({}, state, {routes: action.routes});

    case types.FETCH_ROUTES_FAIL:
      return objectAssign({}, state, {error: action.error});

    case types.FETCH_ROUTE_OBJECT:
      return objectAssign({}, state, {route: null});

    case types.FETCH_ROUTE_SUCCESS:
      return objectAssign({}, state, {route: action.route});

    case types.FETCH_ROUTE_FAIL:
      return objectAssign({}, state, {error: action.error});

    default:
      return state;
  }
}
