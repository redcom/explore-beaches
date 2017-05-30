// @flow

import React from 'react';
import { BeachContainer } from '../containers';
import { initScrolling, destroyScrolling } from '../helpers/scrolling';

class BeachContainerWithInfiniteScroll extends React.Component {
  static displayName = 'BeachContainerWithInfiniteScroll';

  state = {
    page: 0,
  };

  scrollCallback = () => {
    if (!('document' in window)) {
      return;
    }
    // $FlowFixMe document.body could potentially be null
    const { scrollHeight = 0, scrollTop = 0 } = document.body;
    if ((scrollHeight - window.outerHeight) / 2 <= scrollTop) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  componentDidMount() {
    initScrolling(this.scrollCallback);
  }

  componentWillUnmount() {
    destroyScrolling();
  }

  render() {
    return <BeachContainer page={this.state.page} />;
  }
}

export default BeachContainerWithInfiniteScroll;
