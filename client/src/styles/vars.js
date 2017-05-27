import { keyframes } from 'styled-components';

// Sizes variables
export const defaultSectionMargins = '2.5em 1em';
export const defaultHorizontalPadding = '1em';
export const defaultVerticalPadding = '0.5em';

// Colors variables
export const white = '#fff';
export const black = '#000';
export const errorColor = '#e36049';
export const notificationColor = '#b294bb';

export const defaultPrimaryColor = black;

// Font style
export const defaultFontSize = '1em';
export const headerFontSize = '1.8em';
export const smallFontSize = '0.8em';
export const defaultLineHeight = '1.2em';

export const slideInAnimation = keyframes`
  0% {
    transform: translateX(-10%);
    opacity: 0.4;
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
