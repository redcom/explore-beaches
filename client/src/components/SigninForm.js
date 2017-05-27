// @flow

import React from 'react';
import { Button, Form, FormGroup, Text, Title } from '../components';

type Props = {
  children: any,
  onLogin: Function,
};

const onSubmit = evt => {
  evt.preventDefault();
  console.log(evt);
};

const SigninForm = ({ children, onLogin }: Props) => {
  const doLogin = () => onLogin({ username: 'aaa', password: 'bbbb' });
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup><Title>Login</Title></FormGroup>

      <FormGroup>{children}</FormGroup>

      <FormGroup label="username">
        <Text placeholder="enter username" id="username" />
      </FormGroup>
      <FormGroup label="password">
        <Text placeholder="enter password" type="password" id="password" />
      </FormGroup>

      <FormGroup key="actionButtons">
        <Button width="auto" onClick={doLogin}>Login</Button>
      </FormGroup>
    </Form>
  );
};

export default SigninForm;
