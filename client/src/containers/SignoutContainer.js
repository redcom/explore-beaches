// @flow
import type { State, UserType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ErrorContainer } from '../containers';
import { Wrapper, Loader } from '../components';
import { logout } from '../actions/UserActions';
import { isAuthorized } from '../helpers/user';

type Props = {
  user: UserType,
  dispatch: Function,
};
const SignoutContainer = ({ user, dispatch }: Props) => {
  // do some cleanup
  if (isAuthorized(user)) {
    dispatch(logout({ token: user.token }));
  } else {
    return <Redirect to={'/'} />;
  }
  return (
    <Wrapper>
      <Loader />
      <ErrorContainer />
    </Wrapper>
  );
};

export default connect((state: State) => ({ user: state.user }))(
  SignoutContainer,
);
