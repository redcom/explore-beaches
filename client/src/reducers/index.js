import { combineReducers } from 'redux';
import error from './error';

const rootReducer = combineReducers({
  error,
});

export default rootReducer;
