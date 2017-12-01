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

const url = 'http://localhost:8000';

export function fetchRoutes(searchText) {
  return async dispatch => {
    try {
      dispatch(fetchRoutesObject());
      const routesResponse = await request
        .post(`${url}/api/search-routes`)
        .send({name: searchText});
      dispatch(fetchRoutesSuccess(routesResponse.body));
    } catch (e) {
      e => dispatch(fetchRoutesFail(e.response.body));
    }
  };
}
