// @flow
import type { UserType } from '../store/CommonStoreTypes';

export const isAuthorized = (user: UserType): boolean =>
  !!user.token && !!user.username;
