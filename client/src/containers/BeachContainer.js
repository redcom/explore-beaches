// @flow

import React from 'react';
import { Wrapper } from '../components';
import { fetchImages, fetchOneImage } from '../helpers/api';

type PropTypes = {
  items: Object,
};

class Container extends React.Component {
  static displayName = 'BeachContainer';

  props: PropTypes;

  state = {
    page: 0,
    images: [],
  };

  componentWillMount() {
    (async () => {
      const images = await fetchImages(this.state.page)();
      this.setState({
        images,
      });
    })();
  }

  renderImage = (item: Object) => {
    const { _id: key, url: path, name } = item;
    return <img key={`${key}`} src={fetchOneImage({ path })} alt={name} />;
  };
  render() {
    return (
      <Wrapper>
        {this.state.images.map(item => this.renderImage(item))}
      </Wrapper>
    );
  }
}

export default Container;
