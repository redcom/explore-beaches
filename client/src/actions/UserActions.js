// @flow

import type { ErrorsType } from '../store/CommonStoreTypes';
import { apiLogin } from '../helpers/api';
import { LOGIN, LOGIN_FAILED } from '../constants/ActionTypes';

export const loginFailed = (error: ErrorsType): Object => ({
  type: LOGIN_FAILED,
  error,
});

type CredentialsType = {
  username: string,
  password: string,
};
export const login = (credentials: CredentialsType): Function =>
  async dispatch => {
    try {
      const { token } = await apiLogin(credentials)();
      return dispatch({
        type: LOGIN,
        user: {
          username: credentials.username,
          token,
        },
      });
    } catch (error) {
      return dispatch(loginFailed(error));
    }
  };
