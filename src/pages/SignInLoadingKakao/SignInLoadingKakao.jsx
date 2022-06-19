import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { axios } from '../../api';
import { SET_TOKEN } from '../../store/Auth/action';
import { SUCCESS_SIGNIN } from '../../store/SignIn/action';

function SignInLoadingKakao() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const goBackPage = useSelector(state => state.authReducer.goBackPage);
  console.log(goBackPage);
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
        } = await axios({
          method: 'post',
          url: '/api/sign/login/social/kakao',
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
        console.log(error);
      }
    };
    reqeustSocialSignIn();
  }, []);
  return <div></div>;
}

export default SignInLoadingKakao;
