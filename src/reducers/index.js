import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import userAccount from './user-account';
import route from './route';
import area from './area';
import region from './region';

const rootReducer = combineReducers({
  routing: routerReducer,
  route,
  userAccount,
  area,
  region,
});

export default rootReducer;
