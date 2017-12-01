import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import userAccount from './user-account';
import route from './route';

const rootReducer = combineReducers({
  routing: routerReducer,
  route,
  userAccount,
});

export default rootReducer;
