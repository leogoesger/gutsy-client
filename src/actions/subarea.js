import request from 'superagent';
import {SubareaTypes as types} from '../action-types';

const fetchSubareasObject = () => {
  return {
    type: types.FETCH_SUBAREAS_OBJECT,
  };
};

const fetchSubareasSuccess = areas => {
  return {
    type: types.FETCH_SUBAREAS_SUCCESS,
    areas,
  };
};

const fetchSubareasFail = error => {
  return {
    type: types.FETCH_SUBAREAS_FAIL,
    error,
  };
};

export function fetchSubareas(searchText) {
  return async dispatch => {
    try {
      if (searchText) {
        const areasResponse = await request
          .post(`${process.env.SERVER_ADDRESS}/api/search-subareas`)
          .send({name: searchText});
        dispatch(fetchSubareasSuccess(areasResponse.body));
      } else {
        dispatch(fetchSubareasObject());
      }
    } catch (e) {
      e => dispatch(fetchSubareasFail(e.response.body));
    }
  };
}
