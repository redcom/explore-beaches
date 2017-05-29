// @flow

import type { State, UserType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Loader, ImageGallery, Image, Title } from '../components';
import { apiFetchImages, apiFetchOneImage } from '../helpers/api';
import { isAuthorized } from '../helpers/user';

type PropTypes = {
  user: UserType,
};

class BeachContainer extends React.Component {
  static displayName = 'BeachContainer';

  props: PropTypes;

  state = {
    page: 0,
    images: [],
  };

  componentDidMount() {
    (async () => {
      const images = await apiFetchImages(this.state.page)();
      this.setState({
        images,
      });
    })();
  }

  renderImage = (item: Object) => {
    const { _id: key, url: path, name } = item;
    return <Image key={`${key}`} src={apiFetchOneImage({ path })} alt={name} />;
  };

  renderImages = () => (
    <ImageGallery>
      {this.state.images.map(item => this.renderImage(item))}
    </ImageGallery>
  );

  render() {
    return (
      <Wrapper>
        {isAuthorized(this.props.user) &&
          <Title>Hello {this.props.user.email}. Check this beaches. </Title>}
        <Loader
          loading={!this.state.images.length}
          onLoaded={this.renderImages}
        />
      </Wrapper>
    );
  }
}

export default connect((state: State) => ({ user: state.user }))(
  BeachContainer,
);
