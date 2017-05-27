// @flow

import styled from 'styled-components';

const Text = styled.input.attrs({
  type: props => props.type === 'password' ? 'password' : 'text',
  placeholder: props => props.placeholder || '',
  onChange: props => props.onChange,
  value: props => props.value,
})`
  width: 100%;
  flex: 3;
`;

export default Text;
