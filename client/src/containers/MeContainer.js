// @flow

import type { State, UserType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Wrapper, Title, UserProfile, Loader } from '../components';
import { getProfile } from '../actions/UserActions';
import { isAuthorized, userHasFullProfileFetched } from '../helpers/user';

type Props = {
  user: UserType,
  dispatch: Function,
};

const renderAuthRequired = user =>
  !isAuthorized(user) &&
  <div>
    <Link to="/signin"> You are not authorized. Click here to login.</Link>
  </div>;

const renderFullProfile = user =>
  userHasFullProfileFetched(user)
    ? <UserProfile user={user} />
    : isAuthorized(user) && <Loader />;

class MyProfileContainer extends React.Component {
  static displayName = 'MyProfileContainer';

  props: Props;

  componentDidMount() {
    const { user, dispatch } = this.props;

    if (!isAuthorized(user)) {
      return;
    }

    if (!userHasFullProfileFetched(user)) {
      dispatch(getProfile(user));
    }
  }

  render() {
    const { user } = this.props;

    return (
      <Wrapper>
        <Title>My profile</Title>
        {renderAuthRequired(user)}
        {renderFullProfile(user)}
      </Wrapper>
    );
  }
}

export default connect((state: State) => ({ user: state.user }))(
  MyProfileContainer,
);
