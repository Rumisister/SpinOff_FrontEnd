import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { HideMessage, NormalButton, TextButton } from '../../atoms';
import { Timer, InputForm } from '../../molecules';
import {
  Container,
  H1,
  inputStyle,
  textButtonStyle,
  inputStyle2,
  Ul,
  Li,
  normalButtonStyle,
  textButtonStyle3,
  BackLogin,
  SubmitBtnContainer,
} from './styles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  checkAuth,
  requestAuth,
  reRequest,
} from '../../../store/SignUp/action';
import SignUpHook from './SignUpHook';
import { birthRule, emailRule, nameRule, phoneRule } from './regexp';

function SignUpForm({ isOpen, modeDispatch }) {
  const { authSuccess, receiveSuccess, endTime, endAuth } = useSelector(
    state => ({
      authSuccess: state.signUpReducer.authSuccess,
      receiveSuccess: state.signUpReducer.receiveSuccess,
      endTime: state.signUpReducer.endTime,
      endAuth: state.signUpReducer.endAuth,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const Hook = SignUpHook();
  const {
    name,
    birth,
    phone,
    email,
    auth,
    nameError,
    birthError,
    phoneError,
    emailError,
  } = Hook.state;
  useEffect(() => {
    if (endAuth) {
      modeDispatch.onSignInfo();
    }
    return () => {
      Hook.onReset();
      console.log('unmounted');
    };
  }, [isOpen, endAuth]);
  const onClickEmailAuth = () => {
    dispatch(reRequest());
    if (!emailRule(email)) {
      Hook.setError('email');
      return;
    }
    dispatch(requestAuth(email));
  };
  const onSubmit = () => {
    const chkType = ['name', 'birth', 'phone', 'email'];
    const chkValue = [name, birth, phone, email];
    const chkFunc = [nameRule, birthRule, phoneRule, emailRule];
    const result = chkValue
      .map((chk, idx) => {
        if (!chkFunc[idx](chk)) {
          Hook.setError(chkType[idx]);
          return false;
        }
        return true;
      })
      .every(chk => chk);
    if (result) {
      const fitBirthForm =
        birth.slice(0, 4) + '-' + birth.slice(4, 6) + '-' + birth.slice(6, 8);
      dispatch(
        checkAuth({
          name: name,
          birth: fitBirthForm,
          phone: phone,
          auth: auth,
          email: email,
        }),
      );
    }
  };
  return (
    <Container>
      <H1>
        회원가입
        <BackLogin>
          계정이 있으신가요?
          <TextButton Style={textButtonStyle3} onClick={modeDispatch.onSignIn}>
            로그인
          </TextButton>
        </BackLogin>
      </H1>
      <InputForm
        InputName="이름"
        Style={inputStyle}
        placeholder="홍길동"
        name="name"
        value={name}
        onChange={Hook.onChange}
      />
      <HideMessage
        Shown={nameError}
        Comments="입력이 올바르지 않습니다."
        color={'#f24860'}
      />
      <InputForm
        InputName="생년월일"
        Style={inputStyle}
        placeholder="19940212"
        name="birth"
        value={birth}
        onChange={Hook.onChange}
      />
      <HideMessage
        Shown={birthError}
        Comments="YYYYMMDD 형태로 입력해주세요."
        color={'#f24860'}
      />
      <InputForm
        InputName="연락처"
        Style={inputStyle}
        placeholder="010-1234-5678"
        name="phone"
        value={phone}
        onChange={Hook.onChange}
      />
      <HideMessage
        Shown={phoneError}
        Comments="입력이 올바르지 않습니다."
        color={'#f24860'}
      />
      <InputForm
        InputName="이메일"
        Style={inputStyle2}
        placeholder="SpinOff@gmail.com"
        name="email"
        value={email}
        onChange={Hook.onChange}
      >
        <TextButton Style={textButtonStyle} onClick={onClickEmailAuth}>
          인증요청
        </TextButton>
      </InputForm>
      <HideMessage
        Shown={emailError}
        Comments="이메일 양식을 확인해 주세요."
        color={'#f24860'}
      />
      <HideMessage
        Shown={!receiveSuccess}
        Comments="이미 존재하는 이메일 입니다."
        color={'#f24860'}
      />
      <HideMessage
        Shown={endTime !== -1 && receiveSuccess}
        Comments="인증번호가 전송되었습니다."
        color={'#808080'}
      />
      <InputForm
        InputName="인증번호"
        Style={inputStyle2}
        placeholder="인증번호 입력"
        name="auth"
        value={auth}
        onChange={Hook.onChange}
      >
        {endTime !== -1 ? <Timer endTime={endTime} /> : null}
      </InputForm>
      <HideMessage
        Shown={!authSuccess}
        Comments="인증번호가 올바르지 않습니다."
        color={'#f24860'}
      />
      <Ul>
        <Li>3분 이내로 인증번호 []자리를 입력해주세요.</Li>
        <Li>
          []분 이내에 인증번호가 수신되지 않았을 경우 이메일을 올바르게
          기재하였는지 확인 후 재시도해주시기 바랍니다.
        </Li>
      </Ul>
      <SubmitBtnContainer>
        <NormalButton Style={normalButtonStyle} onClick={onSubmit}>
          확인
        </NormalButton>
      </SubmitBtnContainer>
    </Container>
  );
}

SignUpForm.propTypes = {
  isOpen: propTypes.bool,
  modeDispatch: propTypes.object,
};

export default SignUpForm;
