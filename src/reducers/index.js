import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import userAccount from './user-account';
import climb from './climb';
import book from './book';
import region from './region';
import subregion from './subregion';
import area from './area';
import subarea from './subarea';

const rootReducer = combineReducers({
  routing: routerReducer,
  climb,
  book,
  userAccount,
  region,
  subregion,
  area,
  subarea,
});

export default rootReducer;
