import request from 'superagent';
import {UserBookTypes as types} from '../action-types';
import {fetchCurrentUser} from './user-account';

const likeRequestObject = () => {
  return {type: types.LIKE_REQUEST};
};

const errorRequest = () => {
  return {type: types.ERROR_REQUEST};
};

const unlikeRequestObject = () => {
  return {type: types.UNLIKE_REQUEST};
};

const removeFromCartRequestObject = () => {
  return {type: types.REMOVE_FROM_CART_REQUEST};
};

export function likeRequest() {
  return async dispatch => {
    try {
      dispatch(likeRequestObject());
    } catch (e) {
      dispatch(errorRequest());
    }
  };
}

export function unlikeRequest() {
  return async dispatch => {
    try {
      dispatch(unlikeRequestObject());
    } catch (e) {
      dispatch(errorRequest());
    }
  };
}

export function addToCartRequest(userBookData) {
  return async dispatch => {
    try {
      await request
        .post(`${process.env.SERVER_ADDRESS}/api/userBooks`)
        .send(userBookData);
      dispatch(fetchCurrentUser());
    } catch (e) {
      dispatch(errorRequest());
    }
  };
}

export function removeFromCartRequest() {
  return async dispatch => {
    try {
      dispatch(removeFromCartRequestObject());
    } catch (e) {
      dispatch(errorRequest());
    }
  };
}
