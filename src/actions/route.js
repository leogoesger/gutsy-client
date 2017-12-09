import request from 'superagent';
import {RouteTypes as types} from '../action-types';

const fetchRoutesObject = () => {
  return {
    type: types.FETCH_ROUTES_OBJECT,
  };
};

const fetchRoutesSuccess = routes => {
  return {
    type: types.FETCH_ROUTES_SUCCESS,
    routes,
  };
};

const fetchRoutesFail = error => {
  return {
    type: types.FETCH_ROUTES_FAIL,
    error,
  };
};

const fetchRouteObject = () => {
  return {
    type: types.FETCH_ROUTE_OBJECT,
  };
};

const fetchRouteSuccess = route => {
  return {
    type: types.FETCH_ROUTE_SUCCESS,
    route,
  };
};

const fetchRouteFail = error => {
  return {
    type: types.FETCH_ROUTE_FAIL,
    error,
  };
};

export function fetchRoutes(searchText) {
  return async dispatch => {
    try {
      if (searchText) {
        const routesResponse = await request
          .post(`${process.env.SERVER_ADDRESS}/api/search-routes`)
          .send({name: searchText});
        dispatch(fetchRoutesSuccess(routesResponse.body));
      } else {
        dispatch(fetchRoutesObject());
      }
    } catch (e) {
      e => dispatch(fetchRoutesFail(e.response.body));
    }
  };
}

export function fetchRoute(routeId) {
  return async dispatch => {
    try {
      if (routeId) {
        const routeResponse = await request.get(
          `${process.env.SERVER_ADDRESS}/api/routes/${routeId}`
        );
        dispatch(fetchRouteSuccess(routeResponse.body));
      } else {
        dispatch(fetchRouteObject());
      }
    } catch (e) {
      e => dispatch(fetchRouteFail(e.response.body));
    }
  };
}
