import React, { useEffect } from 'react';
import { Introduction } from '../../components/organisms';
import Masonry from '../../components/organisms/Masonry/Masonry';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

function mainPage() {
  //const isSignIn = useSelector(state => state.authReducer.isSignIn);
  const listFilter = useSelector(state => state.listFilterReducer);
  useEffect(() => {
    // let componentMounted = true;
    // const requestContents = async () => {};
  }, [listFilter]);
  return (
    <>
      <Introduction />
      <Masonry />
    </>
  );
}

mainPage.propTypes = {
  isSignIn: propTypes.bool,
};
export default mainPage;
