import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import {
  CuratedMoive,
  PopularHashTag,
  RecentlySearch,
  SearchBar,
} from '../../molecules';
import { HeaderBar } from '..';

function Header({ isSignIn }) {
  return (
    <Container>
      <HeaderBar isSignIn={isSignIn} />
      <SearchBar>
        <RecentlySearch />
        <PopularHashTag />
        <CuratedMoive />
      </SearchBar>
    </Container>
  );
}

Header.propTypes = {
  isSignIn: propTypes.bool,
};
export default Header;
