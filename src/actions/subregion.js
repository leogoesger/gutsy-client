import request from 'superagent';
import {SubregionTypes as types} from '../action-types';

const fetchSubregionsObject = () => {
  return {
    type: types.FETCH_SUBREGIONS_OBJECT,
  };
};

const fetchSubregionsSuccess = subregions => {
  return {
    type: types.FETCH_SUBREGIONS_SUCCESS,
    subregions,
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
        const subregionsResponse = await request
          .post(`${process.env.SERVER_ADDRESS}/api/search-subregions`)
          .send({name: searchText});
        dispatch(fetchSubregionsSuccess(subregionsResponse.body));
      } else {
        dispatch(fetchSubregionsObject());
      }
    } catch (e) {
      e => dispatch(fetchSubregionsFail(e.response.body));
    }
  };
}
