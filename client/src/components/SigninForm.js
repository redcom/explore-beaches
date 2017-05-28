// @flow

import React from 'react';
import { Button, Form, FormGroup, Text, Title } from '../components';

import { isValidPassword, isEmail } from '../helpers/validators';

type Props = {
  children: any,
  onLogin?: Function,
  onRegister?: Function,
};

class SigninForm extends React.Component {
  static displayName = 'SigninForm';

  props: Props;

  state = {
    isFormValid: false,
  };

  email = undefined;
  password = undefined;

  onClick = () =>
    (this.props.onLogin &&
      this.props.onLogin({
        email: this.email,
        password: this.password,
      })) ||
    (this.props.onRegister &&
      this.props.onRegister({
        email: this.email,
        password: this.password,
      }));

  onSubmit = (evt: Object) => {
    evt.preventDefault();
  };

  isLoginFormValid(): ?boolean {
    const { email = '', password = '' } = this;
    const isFormValid = email.trim().length > 0 && password.trim().length > 0;
    this.setState({
      isFormValid,
    });
  }

  isRegisterFormValid(): ?boolean {
    const { email = '', password = '' } = this;
    const isFormValid = isEmail(email) && isValidPassword(password);
    this.setState({
      isFormValid,
    });
  }

  onChange = (evt: Object) => {
    // $FlowFixMe assigment of computed prop
    this[evt.target.id] = evt.target.value;
    return this.isLoginForm()
      ? this.isLoginFormValid()
      : this.isRegisterFormValid();
  };

  isLoginForm = () => typeof this.props.onLogin === 'function';

  renderTitle() {
    return (
      <Title>
        {this.isLoginForm() ? 'Login' : 'Register'}
      </Title>
    );
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>{this.renderTitle()}</FormGroup>

        <FormGroup>{this.props.children}</FormGroup>

        <FormGroup label="email">
          <Text
            onChange={this.onChange}
            placeholder="Enter your email"
            id="email"
            type="email"
          />
        </FormGroup>
        <FormGroup label="password">
          <Text
            onChange={this.onChange}
            placeholder="enter password"
            type="password"
            id="password"
          />
        </FormGroup>

        <FormGroup key="actionButtons">
          <Button
            width="auto"
            onClick={this.onClick}
            isDisabled={!this.state.isFormValid}
          >
            {this.isLoginForm() ? 'Login' : 'Register'}
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SigninForm;
