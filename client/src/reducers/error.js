// @flow
import type { ErrorsType } from '../store/CommonStoreTypes';

import { LOGIN_FAILED, REGISTER_FAILED } from '../constants/ActionTypes';

const initialState = {};

const errors = (state: ErrorsType = initialState, action: Object) => {
  switch (action.type) {
    case LOGIN_FAILED:
      return { error: action.error };
    case REGISTER_FAILED:
      return { error: action.error };
    default:
      return state;
  }
};

export default errors;
