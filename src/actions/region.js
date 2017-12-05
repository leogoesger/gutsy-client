import request from 'superagent';
import {RegionTypes as types} from '../action-types';

const fetchRegionsObject = () => {
  return {
    type: types.FETCH_REGIONS_OBJECT,
  };
};

const fetchRegionsSuccess = regions => {
  return {
    type: types.FETCH_REGIONS_SUCCESS,
    regions,
  };
};

const fetchRegionsFail = error => {
  return {
    type: types.FETCH_REGIONS_FAIL,
    error,
  };
};

export function fetchRegions(searchText) {
  return async dispatch => {
    try {
      if (searchText) {
        const regionsResponse = await request
          .post(`${process.env.SERVER_ADDRESS}/api/search-regions`)
          .send({name: searchText});
        dispatch(fetchRegionsSuccess(regionsResponse.body));
      } else {
        dispatch(fetchRegionsObject());
      }
    } catch (e) {
      e => dispatch(fetchRegionsFail(e.response.body));
    }
  };
}
