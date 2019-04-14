import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { vendor } from './vendor.reducer';
import { listData } from './list.reducer';


const rootReducer = combineReducers({
  authentication,
  vendor,
  listData
});

export default rootReducer;
