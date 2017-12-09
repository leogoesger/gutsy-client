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

const fetchSubregionObject = () => {
  return {
    type: types.FETCH_SUBREGION_OBJECT,
  };
};

const fetchSubregionSuccess = climb => {
  return {
    type: types.FETCH_SUBREGION_SUCCESS,
    climb,
  };
};

const fetchSubregionFail = error => {
  return {
    type: types.FETCH_SUBREGION_FAIL,
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

export function fetchSubregion(subregionId) {
  return async dispatch => {
    try {
      if (subregionId) {
        const subregionResponse = await request.get(
          `${process.env.SERVER_ADDRESS}/api/subregions/${subregionId}`
        );
        dispatch(fetchSubregionSuccess(subregionResponse.body));
      } else {
        dispatch(fetchSubregionObject());
      }
    } catch (e) {
      e => dispatch(fetchSubregionFail(e.response.body));
    }
  };
}
