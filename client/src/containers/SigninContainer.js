// @flow

import React from 'react';
import { connect } from 'react-redux';
import { ErrorContainer } from '../containers';
import { Wrapper, SigninForm } from '../components';
import { login } from '../actions/UserActions';

const SigninContainer = (
  {
    dispatch,
  }: {
    dispatch: Function,
  },
) => {
  const onLogin = ({ username, password }) =>
    dispatch(login({ username, password }));

  return (
    <Wrapper>
      <SigninForm onLogin={onLogin}>
        <ErrorContainer />
      </SigninForm>
    </Wrapper>
  );
};

export default connect()(SigninContainer);
