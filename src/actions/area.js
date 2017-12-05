import request from 'superagent';
import {AreaTypes as types} from '../action-types';

const fetchAreasObject = () => {
  return {
    type: types.FETCH_AREAS_OBJECT,
  };
};

const fetchAreasSuccess = areas => {
  return {
    type: types.FETCH_AREAS_SUCCESS,
    areas,
  };
};

const fetchAreasFail = error => {
  return {
    type: types.FETCH_AREAS_FAIL,
    error,
  };
};

export function fetchAreas(searchText) {
  return async dispatch => {
    try {
      if (searchText) {
        const areasResponse = await request
          .post(`${process.env.SERVER_ADDRESS}/api/search-areas`)
          .send({name: searchText});
        dispatch(fetchAreasSuccess(areasResponse.body));
      } else {
        dispatch(fetchAreasObject());
      }
    } catch (e) {
      e => dispatch(fetchAreasFail(e.response.body));
    }
  };
}
