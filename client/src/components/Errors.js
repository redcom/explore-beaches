import { slideInAnimation, errorColor } from '../styles/vars';
import styled from 'styled-components';

const Errors = styled.div`
  color: ${errorColor};
  padding: 1.5em 0;
  animation: ${slideInAnimation} 3s ease-in-out;
  text-align: center;
`;

export default Errors;
