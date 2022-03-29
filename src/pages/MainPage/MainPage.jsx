import React, { useEffect } from 'react';
import { Footer, Header, Introduction } from '../../components/organisms';
import Masonry from '../../components/organisms/Masonry/Masonry';
import propTypes from 'prop-types';
import { store } from '../../store';
import { SET_TOKEN } from '../../store/Auth/action';

function mainPage({ isSignIn }) {
  //const isSignIn = useSelector(state => state.authReducer.isSignIn);
  useEffect(() => {
    console.log('메인페이지 마운트!!!!!');
    const access_token = new URL(window.location.href).searchParams.get(
      'accessToken',
    );
    const refresh_token = new URL(window.location.href).searchParams.get(
      'refreshToken',
    );
    if (access_token && refresh_token) {
      store.dispatch({
        type: SET_TOKEN,
        payload: { access_token, refresh_token },
      });
      window.location.replace('http://localhost:3000/');
    }
  }, []);
  return (
    <>
      <Header isSignIn={isSignIn} />
      <Introduction />
      <Masonry />
      <Footer />
    </>
  );
}

mainPage.propTypes = {
  isSignIn: propTypes.bool,
};
export default mainPage;
