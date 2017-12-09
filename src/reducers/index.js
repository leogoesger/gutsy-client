import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import userAccount from './user-account';
import route from './route';
import region from './region';
import subregion from './subregion';
import area from './area';
import subarea from './subarea';

const rootReducer = combineReducers({
  routing: routerReducer,
  route,
  userAccount,
  region,
  subregion,
  area,
  subarea,
});

export default rootReducer;
