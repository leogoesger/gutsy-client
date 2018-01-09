import request from 'superagent';
import {fetchCurrentUser} from './user-account';
import {SharedTypes as types} from '../action-types';

const unknownErrorObject = () => {
  return {
    type: types.UNKOWN_ERROR_OBJECT,
  };
};

export function addToCartRequest(userBookData) {
  return async dispatch => {
    try {
      await request
        .post(`${process.env.SERVER_ADDRESS}/api/userBooks`)
        .send(userBookData);
      dispatch(fetchCurrentUser());
    } catch (e) {
      dispatch(unknownErrorObject());
    }
  };
}
