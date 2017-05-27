// @flow

import React from 'react';
import { Button, Form, FormGroup, Text, Title } from '../components';

type Props = {
  children: any,
  onLogin: Function,
};

const onSubmit = evt => {
  evt.preventDefault();
};

const SigninForm = ({ children, onLogin }: Props) => {
  const credentials = {
    username: undefined,
    password: undefined,
  };

  const doLogin = () => onLogin(credentials);

  const onChange = evt => {
    credentials[evt.target.id] = evt.target.value;
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup><Title>Login</Title></FormGroup>

      <FormGroup>{children}</FormGroup>

      <FormGroup label="username">
        <Text
          onChange={onChange}
          value={credentials.username}
          placeholder="enter username"
          id="username"
        />
      </FormGroup>
      <FormGroup label="password">
        <Text
          onChange={onChange}
          value={credentials.password}
          placeholder="enter password"
          type="password"
          id="password"
        />
      </FormGroup>

      <FormGroup key="actionButtons">
        <Button width="auto" onClick={doLogin}>Login</Button>
      </FormGroup>
    </Form>
  );
};

export default SigninForm;
