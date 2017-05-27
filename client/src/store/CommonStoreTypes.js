// @flow

// Stores
export type UserType = {
  username?: string,
  token?: string,
};

export type ErrorsType = Object;

// State
export type State = {
  error: ErrorsType,
  user: UserType,
};
