// @flow

// Stores
export type UserType = {
  email?: string,
  token?: string,
};

export type ErrorsType = Object;

// State
export type State = {
  error: ErrorsType,
  user: UserType,
};
