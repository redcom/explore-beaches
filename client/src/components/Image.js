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
    loadingFailed: false,
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
    newImage.onerror = () => {
      this.setState({
        isLoading: false,
        loadingFailed: true,
      });
    };
    newImage.src = this.props.src;
  }

  displayImage = () => <Img src={this.props.src} alt={this.props.alt} />;
  displayTimeout = () => <div>Image not loaded</div>;

  render() {
    const { isLoading, loadingFailed } = this.state;
    return (
      <ImageBox>
        <Loader
          type={'small'}
          loading={isLoading}
          onLoaded={!loadingFailed ? this.displayImage : null}
          onTimeout={loadingFailed ? this.displayTimeout : null}
        />
      </ImageBox>
    );
  }
}

export default ImageComponent;
