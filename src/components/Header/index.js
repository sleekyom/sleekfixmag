import React from 'react';
import SFDBLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={SFDBLogo} atl='sfdb-logo' />
      <TMDBLogoImg src={TMBDLogo} atl='tmdb-logo' />
    </Content>
  </Wrapper>
)

export default Header;