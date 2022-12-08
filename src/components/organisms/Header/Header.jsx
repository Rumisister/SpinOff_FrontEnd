import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import { HeaderBar, SearchBar } from '..';
import { useSelector } from 'react-redux';

function Header({ isSignIn }) {
  const needSearchBar = useSelector(state => state.needSearchBarReducer);
  return (
    <Container>
      <HeaderBar isSignIn={isSignIn} />
      {needSearchBar ? <SearchBar isSignIn={isSignIn} /> : null}
    </Container>
  );
}

Header.propTypes = {
  isSignIn: propTypes.bool,
};
export default Header;
