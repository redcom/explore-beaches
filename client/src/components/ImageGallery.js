// @flow

import styled from 'styled-components';

const ImageGallery = styled.div`
  column-count: 3;
  column-gap: 1em;
  @media (max-width: 400px) {
    column-count: 1;
  }
  @media (max-width: 700px) {
    column-count: 2;
  }
`;

export default ImageGallery;
