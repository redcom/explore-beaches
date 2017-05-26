import { keyframes } from 'styled-components';

// Sizes variables
export const defaultSectionMargins = '2.5em 10em';
export const defaultHorizontalPadding = '1em';
export const defaultVerticalPadding = '0.5em';

// Colors variables
export const white = '#fff';
export const black = '#000';

// Font style
export const defaultFontSize = '1.2em';
export const headerFontSize = '18px';
export const smallFontSize = '13px';

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
