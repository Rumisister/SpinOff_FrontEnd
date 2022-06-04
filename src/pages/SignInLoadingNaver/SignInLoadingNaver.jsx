import React, { useEffect } from 'react';
import { axios } from '../../api';

function SignInLoadingNaver() {
  useEffect(() => {
    let componentMounted = true;
    const accessCode = new URL(window.location.href).searchParams.get('code');
    console.log(accessCode + '!!');
    const reqeustSocialSignIn = async () => {
      try {
        const res = axios({
          mothod: 'post',
          url: '/api/sign/login/social/naver',
          data: null,
          params: {
            authCode: accessCode,
            provider: 'naver',
          },
        });
        console.log(res);
        if (componentMounted) {
          // dispatch({
          //   type: SUCCESS_SIGNIN,
          // });
          // dispatch({
          //   type: SET_TOKEN,
          //   payload: { token, refreshToken, id },
          // });
          // history(-3);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    reqeustSocialSignIn();
  }, []);
  return <div></div>;
}

export default SignInLoadingNaver;
