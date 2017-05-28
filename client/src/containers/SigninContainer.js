// @flow

import type { State, UserType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ErrorContainer } from '../containers';
import { Wrapper, SigninForm, Notification } from '../components';
import { login } from '../actions/UserActions';
import { isAuthorized } from '../helpers/user';

type Props = {
  user: UserType,
  dispatch: Function,
};
const SigninContainer = ({ user, dispatch }: Props) => {
  const onLogin = ({ email, password }) => dispatch(login({ email, password }));

  return (
    <Wrapper>
      <SigninForm onLogin={onLogin}>
        {isAuthorized(user)
          ? <Notification>
              <Link to="/">
                You are authorized now. Click here to go to homepage
              </Link>
            </Notification>
          : <ErrorContainer />}
      </SigninForm>
    </Wrapper>
  );
};

export default connect((state: State) => ({ user: state.user }))(
  SigninContainer,
);
