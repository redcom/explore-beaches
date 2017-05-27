// @flow

import React from 'react';
import styled from 'styled-components';

import {
  defaultFontSize,
  defaultPrimaryColor,
  defaultLineHeight,
  defaultHorizontalPadding,
  defaultVerticalPadding,
} from '../styles/vars';

export const Form = styled.form.attrs({
  onSubmit: props => props.onSubmit,
})`
  font-size: ${defaultFontSize};
  line-height: ${defaultLineHeight};
  color: ${defaultPrimaryColor};
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: calc(60vh / 2) auto;
`;

export const FormGroupBox = styled.div`
  padding: ${defaultVerticalPadding} ${defaultHorizontalPadding};
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  text-transform: capitalize;
  flex: 1;
`;

type FormGroupType = {
  children: any,
  label?: string,
};
export const FormGroup = ({ children, label }: FormGroupType) => (
  <FormGroupBox>
    {label ? <Label htmlFor={label}>{label}</Label> : ''}
    {children}
  </FormGroupBox>
);
