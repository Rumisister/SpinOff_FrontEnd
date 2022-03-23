import React from 'react';
import { Header, Introduction } from '../../components/organisms';
import Masonry from '../../components/organisms/Masonry/Masonry';
import propTypes from 'prop-types';

function mainPage({ isSignIn }) {
  return (
    <>
      <Header isSignIn={isSignIn} />
      <Introduction />
      <Masonry />
    </>
  );
}

mainPage.propTypes = {
  isSignIn: propTypes.bool,
};
export default mainPage;
