import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuthorized } from '../helpers/user';
import styled from 'styled-components';
import {
  defaultVerticalPadding,
  defaultHorizontalPadding,
} from '../styles/vars';

const LogoImg = require('../../public/assets/logo.png');

const HeaderBox = styled.header`
    height: 3em;
    display: flex;
    align-items: center;
`;

const Logo = styled(NavLink)`
  flex: 1;
`;
const NavBarLink = styled(NavLink)`
  padding: ${defaultVerticalPadding} ${defaultHorizontalPadding};
  flex: 1;
  text-decoration: none;
`;

const Img = styled.img`
  padding: ${defaultVerticalPadding} ${defaultHorizontalPadding};
  height: 100%;
`;

const Header = ({ user }) => (
  <HeaderBox>
    <Logo to={'/'}>
      <Img src={LogoImg} alt="Logo" />
    </Logo>
    <div>
      <NavBarLink to="/">Beaches</NavBarLink>
      {isAuthorized(user) && [
        <NavBarLink to={'/signout'} key="signin">Signout</NavBarLink>,
        <NavBarLink to={'/me'} key="me">Me</NavBarLink>,
      ]}
      {!isAuthorized(user) && [
        <NavBarLink to="/signup" key="register">Register</NavBarLink>,
        <NavBarLink to={'/signin'} key="login">Login</NavBarLink>,
      ]}
    </div>
  </HeaderBox>
);

export default connect(state => ({ user: state.user }))(Header);
