import React, { useEffect } from 'react';

function SignInLoadingGoogle() {
  useEffect(() => {
    const accessCode = new URL(window.location.href).searchParams.get('code');
    console.log(accessCode);
    // if (access_token && refresh_token) {
    //   store.dispatch({
    //     type: SET_TOKEN,
    //     payload: { access_token, refresh_token },
    //   });
    // }
  }, []);
  return <div></div>;
}

export default SignInLoadingGoogle;
