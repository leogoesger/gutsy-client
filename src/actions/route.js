import request from 'superagent';
import {RouteTypes as types} from '../action-types';

const fetchRoutesObject = () => {
  return {
    types: types.FETCH_ROUTES,
  };
};

const fetchRoutesSuccess = routes => {
  return {
    types: types.FETCH_ROUTES_SUCCESS,
    routes,
  };
};

const fetchRoutesFail = error => {
  return {
    types: types.FETCH_ROUTES_FAIL,
    error,
  };
};

const url = 'http://localhost:8000';

export function fetchRoutes(searchText) {
  return async dispatch => {
    try {
      dispatch(fetchRoutesObject());
      const routes = await await request
        .post(`${url}/search-routes`)
        .send({name: searchText});
      dispatch(fetchRoutesSuccess(routes));
    } catch (e) {
      e => dispatch(fetchRoutesFail(e));
    }
  };
}
