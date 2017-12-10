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

const fetchRegionObject = () => {
  return {
    type: types.FETCH_REGION_OBJECT,
  };
};

const fetchRegionSuccess = region => {
  return {
    type: types.FETCH_REGION_SUCCESS,
    region,
  };
};

const fetchRegionFail = error => {
  return {
    type: types.FETCH_REGION_FAIL,
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

export function fetchRegion(regionId) {
  return async dispatch => {
    try {
      if (regionId) {
        const regionResponse = await request.get(
          `${process.env.SERVER_ADDRESS}/api/regions/${regionId}`
        );
        dispatch(fetchRegionSuccess(regionResponse.body));
      } else {
        dispatch(fetchRegionObject());
      }
    } catch (e) {
      e => dispatch(fetchRegionFail(e.response.body));
    }
  };
}
