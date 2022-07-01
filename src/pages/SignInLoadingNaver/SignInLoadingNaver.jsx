import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { axios } from '../../api';
import { SET_TOKEN } from '../../store/Auth/action';
import { SUCCESS_SIGNIN } from '../../store/SignIn/action';

function SignInLoadingNaver() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const goBackPage = useSelector(state => state.authReducer.goBackPage);
  useEffect(() => {
    let componentMounted = true;
    const accessCode = new URL(window.location.href).searchParams.get('code');
    console.log(accessCode + '!!');
    const reqeustSocialSignIn = async () => {
      try {
        const {
          data: {
            data: { token, refreshToken, id },
          },
        } = axios({
          method: 'post',
          url: '/api/sign/login/social/naver',
          data: {
            authCode: accessCode,
          },
        });
        if (componentMounted) {
          console.log('로그인 완료');
          dispatch({
            type: SUCCESS_SIGNIN,
          });
          dispatch({
            type: SET_TOKEN,
            payload: { token, refreshToken, id },
          });
          history(`${goBackPage}`);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    reqeustSocialSignIn();
    return () => {
      componentMounted = false;
    };
  }, []);
  return <div></div>;
}

export default SignInLoadingNaver;
