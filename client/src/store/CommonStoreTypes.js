// @flow

// Stores
export type UserType = {
  username?: string,
  token?: string,
  isAuthorized?: boolean,
};

export type ErrorsType = Object;

// State
export type State = {
  error: ErrorsType,
  user: UserType,
};
