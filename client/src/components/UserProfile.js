// @flow
import type { UserType } from '../store/CommonStoreTypes';
import React from 'react';
import styled from 'styled-components';
import { defaultFontSize, defaultLineHeight } from '../styles/vars';

const UserProfileBox = styled.div`
  font-size: ${props => props.fontSize || defaultFontSize};
  line-height: ${defaultLineHeight};
  width: 100%;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
const Li = styled.li`
  max-width: 80%;
  word-break:break-all;
`;
const Property = styled.div`
  font-weight: bolder;
  margin-right: 1em;
  display: inline-block;
  width: 5em;
`;

const UserProfile = ({ user }: { user: UserType }) => (
  <UserProfileBox>
    <Ul>
      {Object.keys(user).map(property => (
        <Li>
          <Property>{property}</Property>: {user[property]}
        </Li>
      ))}
    </Ul>
  </UserProfileBox>
);

export default UserProfile;
