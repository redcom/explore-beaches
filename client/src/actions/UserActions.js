// @flow

import type { ErrorsType } from '../store/CommonStoreTypes';
import { apiLogin, apiRegister } from '../helpers/api';
import {
  LOGIN,
  LOGIN_FAILED,
  REGISTER,
  REGISTER_FAILED,
} from '../constants/ActionTypes';

export const loginFailed = (error: ErrorsType): Object => ({
  type: LOGIN_FAILED,
  error,
});

export const registerFailed = (error: ErrorsType): Object => ({
  type: REGISTER_FAILED,
  error,
});

type CredentialsType = {
  email: string,
  password: string,
};

export const login = (credentials: CredentialsType): Function =>
  async dispatch => {
    try {
      const { token, email } = await apiLogin(credentials)();
      return dispatch({
        type: LOGIN,
        user: {
          email,
          token,
        },
      });
    } catch (error) {
      return dispatch(loginFailed(error));
    }
  };

type RegisterType = {
  email: string,
  password: string,
};
export const register = ({ email, password }: RegisterType): Function =>
  async dispatch => {
    try {
      const { token } = await apiRegister({ email, password })();
      return dispatch({
        type: REGISTER,
        user: {
          email,
          token,
        },
      });
    } catch (error) {
      return dispatch(loginFailed(error));
    }
  };
