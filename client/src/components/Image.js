// @flow

import React from 'react';
import styled from 'styled-components';
import { Loader } from '../components';

const ImageBox = styled.div`
  display: inline-block;
  margin: 0 0 0.5em;
  width: 100%;
`;

type Props = {
  src: string,
  alt: string,
};

const Img = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  width: 100%;
`;

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

  displayImage = () => <Img src={this.props.src} alt={this.props.alt} />;

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
