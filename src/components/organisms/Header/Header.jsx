import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import { HeaderBar, SearchBar } from '..';

function Header({ isSignIn, needSearchBar }) {
  return (
    <Container>
      <HeaderBar isSignIn={isSignIn} />
      {needSearchBar ? <SearchBar isSignIn={isSignIn} /> : null}
    </Container>
  );
}

Header.propTypes = {
  isSignIn: propTypes.bool,
  needSearchBar: propTypes.bool,
};
export default Header;
