// @flow
import type { State, UserType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ErrorContainer } from '../containers';
import { Wrapper, SigninForm, Notification } from '../components';
import { register } from '../actions/UserActions';
import { isAuthorized } from '../helpers/user';

type Props = {
  user: UserType,
  dispatch: Function,
};
const SignupContainer = ({ user, dispatch }: Props) => {
  const onRegister = ({ email, password }) =>
    dispatch(register({ email, password }));

  return (
    <Wrapper>
      <SigninForm onRegister={onRegister}>
        {isAuthorized(user)
          ? <Notification>
              <Link to="/">
                Your account was created. Click here to go to homepage.
              </Link>
            </Notification>
          : <ErrorContainer />}
      </SigninForm>
    </Wrapper>
  );
};

export default connect((state: State) => ({ user: state.user }))(
  SignupContainer,
);
