import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import userAccount from './user-account';

const rootReducer = combineReducers({
  routing: routerReducer,
  userAccount,
});

export default rootReducer;
