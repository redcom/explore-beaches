// @flow
import type { UserType } from '../store/CommonStoreTypes';

import { LOGIN, REGISTER, UPDATE_USER, LOGOUT } from '../constants/ActionTypes';

const initialState = {};

const user = (state: UserType = initialState, action: Object) => {
  switch (action.type) {
    case LOGIN:
      return { ...action.user };
    case REGISTER:
      return { ...action.user };
    case UPDATE_USER:
      return { ...state, ...action.user };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default user;
