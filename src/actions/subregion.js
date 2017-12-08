import request from 'superagent';
import {SubregionTypes as types} from '../action-types';

const fetchSubregionsObject = () => {
  return {
    type: types.FETCH_SUBREGIONS_OBJECT,
  };
};

const fetchSubregionsSuccess = regions => {
  return {
    type: types.FETCH_SUBREGIONS_SUCCESS,
    regions,
  };
};

const fetchSubregionsFail = error => {
  return {
    type: types.FETCH_SUBREGIONS_FAIL,
    error,
  };
};

export function fetchSubregions(searchText) {
  return async dispatch => {
    try {
      if (searchText) {
        const regionsResponse = await request
          .post(`${process.env.SERVER_ADDRESS}/api/search-subregions`)
          .send({name: searchText});
        dispatch(fetchSubregionsSuccess(regionsResponse.body));
      } else {
        dispatch(fetchSubregionsObject());
      }
    } catch (e) {
      e => dispatch(fetchSubregionsFail(e.response.body));
    }
  };
}
