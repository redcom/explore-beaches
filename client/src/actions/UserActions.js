// @flow

import type { ErrorsType, UserType } from '../store/CommonStoreTypes';
import { apiLogin, apiRegister, apiGetProfile } from '../helpers/api';
import {
  LOGIN,
  LOGIN_FAILED,
  REGISTER,
  REGISTER_FAILED,
  UPDATE_USER,
  UPDATE_USER_FAILED,
} from '../constants/ActionTypes';

export const loginFailed = (error: ErrorsType): Object => ({
  type: LOGIN_FAILED,
  error,
});

export const registerFailed = (error: ErrorsType): Object => ({
  type: REGISTER_FAILED,
  error,
});

export const getProfileFailed = (error: ErrorsType): Object => ({
  type: UPDATE_USER_FAILED,
  error,
});

type CredentialsType = {
  email: string,
  password: string,
};

export const getProfile = ({ token }: UserType): Function =>
  async dispatch => {
    try {
      const user = await apiGetProfile({ token })();
      return dispatch({
        type: UPDATE_USER,
        user,
      });
    } catch (error) {
      return dispatch(getProfileFailed(error));
    }
  };

export const login = ({ email, password }: CredentialsType): Function =>
  async dispatch => {
    try {
      const { token } = await apiLogin({ email, password })();
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

export const register = ({ email, password }: CredentialsType): Function =>
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
