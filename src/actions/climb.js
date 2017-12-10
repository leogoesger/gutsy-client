import request from 'superagent';
import {ClimbTypes as types} from '../action-types';

const fetchClimbsObject = () => {
  return {
    type: types.FETCH_CLIMBS_OBJECT,
  };
};

const fetchClimbsSuccess = climbs => {
  return {
    type: types.FETCH_CLIMBS_SUCCESS,
    climbs,
  };
};

const fetchClimbsFail = error => {
  return {
    type: types.FETCH_CLIMBS_FAIL,
    error,
  };
};

const fetchClimbObject = () => {
  return {
    type: types.FETCH_CLIMB_OBJECT,
  };
};

const fetchClimbSuccess = climb => {
  return {
    type: types.FETCH_CLIMB_SUCCESS,
    climb,
  };
};

const fetchClimbFail = error => {
  return {
    type: types.FETCH_CLIMB_FAIL,
    error,
  };
};

export function fetchClimbs(searchText) {
  return async dispatch => {
    try {
      if (searchText) {
        const climbsResponse = await request
          .post(`${process.env.SERVER_ADDRESS}/api/search-climbs`)
          .send({name: searchText});
        dispatch(fetchClimbsSuccess(climbsResponse.body));
      } else {
        dispatch(fetchClimbsObject());
      }
    } catch (e) {
      e => dispatch(fetchClimbsFail(e.response.body));
    }
  };
}

export function fetchClimb(climbId) {
  return async dispatch => {
    try {
      if (climbId) {
        const climbResponse = await request.get(
          `${process.env.SERVER_ADDRESS}/api/climbs/${climbId}`
        );
        dispatch(fetchClimbSuccess(climbResponse.body));
      } else {
        dispatch(fetchClimbObject());
      }
    } catch (e) {
      e => dispatch(fetchClimbFail(e.response.body));
    }
  };
}
