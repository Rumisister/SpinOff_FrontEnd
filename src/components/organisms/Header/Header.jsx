import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import { HeaderBar, SearchBar } from '..';

function Header({ isSignIn }) {
  return (
    <Container>
      <HeaderBar isSignIn={isSignIn} />
      <SearchBar isSignIn={isSignIn} />
    </Container>
  );
}

Header.propTypes = {
  isSignIn: propTypes.bool,
};
export default Header;
