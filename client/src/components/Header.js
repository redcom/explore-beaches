import React from 'react';
import { Link } from 'react-router-dom';
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

const Logo = styled(Link)`
  flex: 1;
`;
const Signin = styled(Link)`
  padding: ${defaultVerticalPadding} ${defaultHorizontalPadding};
  flex: 1;
  text-decoration: none;
`;
const Signout = Signin.extend`
`;
const Me = Signin.extend`
`;

const TopLeft = styled.div`
`;

const Img = styled.img`
  padding: ${defaultVerticalPadding} ${defaultHorizontalPadding};
  height: 100%;
`;

const Header = () => (
  <HeaderBox>
    <Logo to={'/'}>
      <Img src={LogoImg} alt="Logo" />
    </Logo>
    <TopLeft>
      <Signout to={'/signout'}>Signout</Signout>
      <Me to={'/me'}>Me</Me>
      <Signin to={'/signin'}>Login</Signin>
    </TopLeft>
  </HeaderBox>
);

export default Header;
