// @flow

import React from 'react';
import styled from 'styled-components';
import { Loader } from '../components';
import { white } from '../styles/vars';

const ImageBox = styled.div`
  display: inline-block;
  margin: 0 0 0.5em;
  width: 100%;
`;

const ImgBox = styled.div`
  text-align: center;
  line-height: 3em;
  overflow: hidden;
  color: ${white};
  &>div {
    display: none;
    margin-top: -4em;
  }
  &:hover > div {
    margin-bottom: 1em;
    display: block;
  }
`;

const Img = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  width: 100%;
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

  displayImage = () => (
    <ImgBox>
      <Img src={this.props.src} alt={this.props.alt} />
      <div>{this.props.alt}</div>
    </ImgBox>
  );

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
