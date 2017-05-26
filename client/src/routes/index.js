// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  BeachContainer,
  SigninContainer,
  SignupContainer,
  SignoutContainer,
  MeContainer,
} from '../containers';

import { Header } from '../components';

import { getInitialState, hidrateStoreWithState } from '../actions/AppActions';

class Routes extends Component {
  props: {
    dispatch: Function,
  };

  hidrateStateFromServer = state => {
    this.props.dispatch(hidrateStoreWithState(state));
  };

  componentDidMount() {
    this.props.dispatch(getInitialState(this.hidrateStateFromServer));
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <Route exact path="/" component={BeachContainer} />
          <Route path="/signin" component={SigninContainer} />
          <Route path="/signout" component={SignoutContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/me" component={MeContainer} />
        </div>
      </Router>
    );
  }
}

export default connect()(Routes);
