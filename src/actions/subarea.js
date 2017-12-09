import request from 'superagent';
import {SubareaTypes as types} from '../action-types';

const fetchSubareasObject = () => {
  return {
    type: types.FETCH_SUBAREAS_OBJECT,
  };
};

const fetchSubareasSuccess = subareas => {
  return {
    type: types.FETCH_SUBAREAS_SUCCESS,
    subareas,
  };
};

const fetchSubareasFail = error => {
  return {
    type: types.FETCH_SUBAREAS_FAIL,
    error,
  };
};

const fetchSubareaObject = () => {
  return {
    type: types.FETCH_SUBAREA_OBJECT,
  };
};

const fetchSubareaSuccess = subarea => {
  return {
    type: types.FETCH_SUBAREA_SUCCESS,
    subarea,
  };
};

const fetchSubareaFail = error => {
  return {
    type: types.FETCH_SUBAREA_FAIL,
    error,
  };
};

export function fetchSubareas(searchText) {
  return async dispatch => {
    try {
      if (searchText) {
        const subareasResponse = await request
          .post(`${process.env.SERVER_ADDRESS}/api/search-subareas`)
          .send({name: searchText});
        dispatch(fetchSubareasSuccess(subareasResponse.body));
      } else {
        dispatch(fetchSubareasObject());
      }
    } catch (e) {
      e => dispatch(fetchSubareasFail(e.response.body));
    }
  };
}

export function fetchSubarea(subareaId) {
  return async dispatch => {
    try {
      if (subareaId) {
        const subareaResponse = await request.get(
          `${process.env.SERVER_ADDRESS}/api/subareas/${subareaId}`
        );
        dispatch(fetchSubareaSuccess(subareaResponse.body));
      } else {
        dispatch(fetchSubareaObject());
      }
    } catch (e) {
      e => dispatch(fetchSubareaFail(e.response.body));
    }
  };
}
