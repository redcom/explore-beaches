// @flow

import React from 'react';
import { Wrapper, Loader, Image } from '../components';
import { apiFetchImages, apiFetchOneImage } from '../helpers/api';

type PropTypes = {};

class Container extends React.Component {
  static displayName = 'BeachContainer';

  props: PropTypes;

  state = {
    page: 0,
    images: [],
  };

  componentWillMount() {
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
    <div>{this.state.images.map(item => this.renderImage(item))}</div>
  );

  render() {
    return (
      <Wrapper>
        <Loader
          loading={!this.state.images.length}
          onLoaded={this.renderImages}
        />
      </Wrapper>
    );
  }
}

export default Container;
