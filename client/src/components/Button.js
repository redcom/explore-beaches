import styled from 'styled-components';
import {
  defaultFontSize,
  defaultPrimaryColor,
  defaultLineHeight,
  defaultDisabledColor,
} from '../styles/vars';

const Button = styled.button.attrs({
  disabled: props => props.isDisabled,
})`
  font-size: ${props => props.fontSize || defaultFontSize};
  border: ${props => props.border || `2px solid ${defaultPrimaryColor}`};
  background-color: ${props => props.isDisabled ? defaultDisabledColor : 'transparent'};
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'auto'};
  width: ${props => props.width || '80%'};
  color: ${defaultPrimaryColor};
  align-self: ${props => props.alignSelf || 'flex-end'};
  border-radius: 0.3em;
  line-height: ${defaultLineHeight};
`;

export default Button;
