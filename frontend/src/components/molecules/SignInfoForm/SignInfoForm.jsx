import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Input, NormalButton, TextButton } from '../../atoms';
import {
  Container,
  H1,
  ExInputListContainer,
  InputListContainer,
  InputContainer,
  Span,
  inputStyle,
  inputStyle2,
  normalButtonStyle,
  Explanation,
  Explain,
  CheckBox,
  CheckBoxContainer,
  textButtonStyle,
  textButtonStyle2,
} from './styles';
import { useInput } from '../../../Hooks';

function SignInfoForm({ isOpen, modeDispatch }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const idInput = useInput('');
  const pwInput = useInput('');
  const pwCheckInput = useInput('');
  const nickInput = useInput('');
  console.log(modeDispatch);
  const onCheck1 = () => {
    setCheck1(prev => !prev);
  };
  const onCheck2 = () => {
    setCheck2(prev => !prev);
  };
  useEffect(() => {
    if (!isOpen) {
      idInput.onReset();
      pwInput.onReset();
      pwCheckInput.onReset();
      nickInput.onReset();
    }
  }, [isOpen]);
  return (
    <Container>
      <H1>회원가입</H1>
      <ExInputListContainer>
        <Span>아이디</Span>
        <InputContainer>
          <Input Style={inputStyle2} {...idInput} />
          <TextButton Style={textButtonStyle}>중복확인</TextButton>
        </InputContainer>
      </ExInputListContainer>
      <Explain>
        <Explanation>*6~12자 영문, 숫자로 입력해주세요.</Explanation>
      </Explain>
      <InputListContainer>
        <Span>비밀번호</Span>
        <InputContainer>
          <Input type="password" Style={inputStyle} {...pwInput} />
        </InputContainer>
      </InputListContainer>
      <ExInputListContainer>
        <Span>
          비밀번호
          <br />
          확인
        </Span>
        <InputContainer>
          <Input Style={inputStyle} {...pwCheckInput} />
        </InputContainer>
      </ExInputListContainer>
      <Explain>
        <Explanation>
          *비밀번호는 영문, 숫자, 기호 중 한가지 이상을 조합하여 8자 이상으로
          입력해주세요
        </Explanation>
      </Explain>
      <ExInputListContainer>
        <Span>닉네임</Span>
        <InputContainer>
          <Input Style={inputStyle} {...nickInput} />
        </InputContainer>
      </ExInputListContainer>
      <Explain>
        <Explanation>*2-8자 이내로 입력해주세요</Explanation>
      </Explain>
      <CheckBoxContainer>
        <CheckBox checked={check1}>
          <Input
            type="checkbox"
            Style={{ display: 'none' }}
            onChange={onCheck1}
          />
        </CheckBox>
        이용약관에 동의합니다.
        <TextButton Style={textButtonStyle2}>내용보기</TextButton>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <CheckBox checked={check2}>
          <Input
            type="checkbox"
            Style={{ display: 'none' }}
            onChange={onCheck2}
          />
        </CheckBox>
        개인정보 수입/이용에 동의합니다.
        <TextButton Style={textButtonStyle2}>내용보기</TextButton>
      </CheckBoxContainer>
      <InputListContainer>
        <NormalButton Style={normalButtonStyle} onClick={modeDispatch.onSignIn}>
          확인
        </NormalButton>
      </InputListContainer>
    </Container>
  );
}

SignInfoForm.propTypes = {
  isOpen: propTypes.bool,
  modeDispatch: propTypes.object,
};
export default SignInfoForm;
