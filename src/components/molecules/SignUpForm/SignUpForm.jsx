import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useInput } from '../../../Hooks';
import { Input, NormalButton, TextButton } from '../../atoms';
import {
  Container,
  H1,
  InputListContainer,
  Span,
  inputStyle,
  InputContainer,
  textButtonStyle,
  inputStyle2,
  Ul,
  Li,
  textButtonStyle2,
  normalButtonStyle,
  textButtonStyle3,
  BackLogin,
} from './styles';

function SignUpForm({ isOpen, modeDispatch }) {
  const nameInput = useInput('');
  const birthInput = useInput('');
  const phoneInput = useInput('');
  const emailInput = useInput('');
  const certificateInput = useInput('');
  useEffect(() => {
    if (!isOpen) {
      nameInput.onReset();
      birthInput.onReset();
      phoneInput.onReset();
      emailInput.onReset();
      certificateInput.onReset();
    }
  }, [isOpen]);
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
      <InputListContainer>
        <Span>이름</Span>
        <InputContainer>
          <Input Style={inputStyle} {...nameInput} />
        </InputContainer>
      </InputListContainer>
      <InputListContainer>
        <Span>생년월일</Span>
        <InputContainer>
          <Input Style={inputStyle} {...birthInput} />
        </InputContainer>
      </InputListContainer>
      <InputListContainer>
        <Span>연락처</Span>
        <InputContainer>
          <Input Style={inputStyle} {...phoneInput} />
        </InputContainer>
      </InputListContainer>
      <InputListContainer>
        <Span>이메일</Span>
        <InputContainer>
          <Input Style={inputStyle2} {...emailInput} />
          <TextButton Style={textButtonStyle}>인증요청</TextButton>
        </InputContainer>
      </InputListContainer>
      <InputListContainer>
        <Span>인증번호</Span>
        <InputContainer>
          <Input Style={inputStyle2} {...certificateInput} />
        </InputContainer>
      </InputListContainer>
      <Ul>
        <Li>3분 이내로 인증번호 []자리를 입력해주세요.</Li>
        <Li>
          []분 이내에 인증번호가 수신되지 않았을 경우 이메일을 올바르게
          기재하였는지 확인 후 재시도해주시기 바랍니다.
        </Li>
        <Li>
          재시도 하려면
          <TextButton Style={textButtonStyle2}>여기를 클릭해주세요.</TextButton>
        </Li>
      </Ul>
      <InputListContainer>
        <NormalButton
          Style={normalButtonStyle}
          onClick={modeDispatch.onSignInfo}
        >
          확인
        </NormalButton>
      </InputListContainer>
    </Container>
  );
}

SignUpForm.propTypes = {
  isOpen: propTypes.bool,
  modeDispatch: propTypes.object,
};

export default SignUpForm;
