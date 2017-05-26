// @flow

import React from 'react';
import styled from 'styled-components';
import { Loader } from '../components';

const ImageBox = styled.div`
  min-height: 100px;
  min-width: 100px;
`;

type Props = {
  src: string,
  alt: string,
};

class ImageComponent extends React.Component {
  static displayName = 'ImageComponent';

  props: Props;
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const newImage = new Image();
    newImage.onload = () => {
      if (newImage.complete) {
        this.setState({
          isLoading: false,
        });
      }
    };
    newImage.src = this.props.src;
    newImage.alt = this.props.alt;
  }

  displayImage = () => <img src={this.props.src} alt={this.props.alt} />;

  render() {
    return (
      <ImageBox>
        <Loader
          type={'small'}
          loading={this.state.isLoading}
          onLoaded={this.displayImage}
        />
      </ImageBox>
    );
  }
}

export default ImageComponent;
