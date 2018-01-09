import request from 'superagent';
import {fetchCurrentUser} from './user-account';
import {SharedTypes as types} from '../action-types';

const userClimbObject = () => {
  return {
    type: types.USER_CLIMB_OBJECT,
  };
};

const addTodoObject = () => {
  return {
    type: types.ADD_TODO_OBJECT,
  };
};

const addCompletionObject = () => {
  return {
    type: types.ADD_COMPLETION_OBJECT,
  };
};

const removeUserClimbObject = () => {
  return {
    type: types.REMOVE_USER_CLIMB_OBJECT,
  };
};

const unknownErrorObject = () => {
  return {
    type: types.UNKOWN_ERROR_OBJECT,
  };
};

export function userClimbActionRequest(userClimbData) {
  return async dispatch => {
    dispatch(userClimbObject());
    try {
      await request
        .post(`${process.env.SERVER_ADDRESS}/api/userClimbs`)
        .send(userClimbData);
      if (userClimbData.userClimbStatusId === 2) {
        dispatch(addTodoObject());
      } else if (userClimbData.userClimbStatusId === 3) {
        dispatch(addCompletionObject());
      } else {
        dispatch(removeUserClimbObject());
      }
      dispatch(fetchCurrentUser());
    } catch (e) {
      dispatch(unknownErrorObject());
    }
  };
}
