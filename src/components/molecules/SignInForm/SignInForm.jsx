import React, { useEffect } from 'react';
import {
  Container,
  LogIn,
  PlaceHolder,
  Naver,
  Kakao,
  NaverContainer,
  KakaoContainer,
  inputStyle,
  textButtonStyle,
  textButtonStyle2,
  textButtonStyle3,
  normalButtonStyle,
  ContentContainer,
  InputContainer,
} from './styles';
import { Input, NormalButton, TextButton } from '../../atoms';
import { useInput } from '../../../Hooks';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { requestSignIn } from '../../../store/SignIn/action';
import { useLocation } from 'react-router-dom';
import { setGoBackPage } from '../../../store/Auth/action';
//import { axios } from '../../../api';

const idValidator = id => {
  if (id.length > 12) return false;
  return true;
};
const pwValidator = pw => {
  if (pw.length > 100) return false;
  return true;
};

function SignInForm({ modeDispatch }) {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.pathname + '##');
  const idInput = useInput('', idValidator);
  const pwInput = useInput('', pwValidator);
  const onSignIn = () => {
    console.log(idInput);
    console.log(pwInput);
    dispatch(
      requestSignIn({
        id: idInput.value,
        pw: pwInput.value,
      }),
    );
  };
  useEffect(() => {
    dispatch(setGoBackPage(location.pathname));
    return () => {
      idInput.onReset();
      pwInput.onReset();
    };
  }, []);
  return (
    <Container>
      <ContentContainer>
        <LogIn />
      </ContentContainer>
      <InputContainer>
        <Input Style={inputStyle} {...idInput} />
        <PlaceHolder value={idInput.value}>아이디</PlaceHolder>
      </InputContainer>
      <InputContainer>
        <Input Style={inputStyle} {...pwInput} type="password" />
        <PlaceHolder value={pwInput.value}> 비밀번호</PlaceHolder>
      </InputContainer>
      <ContentContainer>
        <NormalButton Style={normalButtonStyle} onClick={onSignIn}>
          로그인
        </NormalButton>
      </ContentContainer>
      <ContentContainer>
        <TextButton Style={textButtonStyle} onClick={modeDispatch.onSignUp}>
          Spin-off 회원가입
        </TextButton>
        <TextButton Style={textButtonStyle2} onClick={modeDispatch.onFindInfo}>
          아이디/비밀번호 찾기
        </TextButton>
      </ContentContainer>
      <ContentContainer>
        <NaverContainer
          onClick={() => {
            window.location.href = process.env.REACT_APP_NAVER_URL;
          }}
        >
          <Naver />
          <TextButton Style={textButtonStyle3}>
            네이버로
            <br />
            시작하기
          </TextButton>
        </NaverContainer>
        <KakaoContainer
          onClick={() => {
            window.location.href = process.env.REACT_APP_KAKAO_URL;
          }}
        >
          <Kakao />
          <TextButton Style={textButtonStyle3}>
            카카오톡으로
            <br />
            시작하기
          </TextButton>
        </KakaoContainer>
      </ContentContainer>
    </Container>
  );
}

SignInForm.propTypes = {
  isOpen: propTypes.bool,
  modeDispatch: propTypes.object,
};
export default SignInForm;
