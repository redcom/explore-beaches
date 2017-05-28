// @flow
/* eslint-disable no-underscore-dangle */

import type { UserType } from '../store/CommonStoreTypes';

export const isAuthorized = (user: UserType): boolean =>
  !!user.token && !!user.email;

export const userHasFullProfileFetched = (user: UserType): boolean =>
  isAuthorized(user) && !!user._id;
