// @flow

import React from 'react';
import styled from 'styled-components';
import { Button, Title } from '../components';

import {
  defaultFontSize,
  defaultPrimaryColor,
  defaultLineHeight,
  defaultHorizontalPadding,
  defaultVerticalPadding,
} from '../styles/vars';

type Props = {
  children: any,
  onLogin: Function,
};

const Form = styled.form`
  font-size: ${defaultFontSize};
  line-height: ${defaultLineHeight};
  color: ${defaultPrimaryColor};
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: calc(60vh / 2) auto;
`;

const FormGroupBox = styled.div`
  padding: ${defaultVerticalPadding} ${defaultHorizontalPadding};
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  text-transform: capitalize;
  flex: 1;
`;
const FormGroup = ({ children, label }) => (
  <FormGroupBox>
    {label ? <Label htmlFor={label}>{label}</Label> : ''}
    {children}
  </FormGroupBox>
);

const Text = styled.input.attrs({
  type: props => props.type === 'password' ? 'password' : 'text',
  placeholder: props => props.placeholder || '',
})`
  width: 100%;
  flex: 3;
`;

const SigninForm = ({ children, onLogin }: Props) => {
  const doLogin = () => onLogin({ username: 'aaa', password: 'bbbb' });

  return (
    <Form>
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
