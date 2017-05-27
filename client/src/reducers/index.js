import { combineReducers } from 'redux';
import error from './error';
import user from './user';

const rootReducer = combineReducers({
  user,
  error,
});

export default rootReducer;
