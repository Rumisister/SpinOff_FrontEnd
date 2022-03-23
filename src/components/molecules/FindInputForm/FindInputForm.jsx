import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import {
  Container,
  InputListContainer,
  InputContainer,
  inputStyle,
  PlaceHolder,
  normalButtonStyle,
} from './styles';
import { Input, NormalButton } from '../../atoms';
import { useInput } from '../../../Hooks';

function FindInputForm({ isOpen, modeDispatch, idMode }) {
  console.log(isOpen);
  console.log(modeDispatch);
  const idnameInput = useInput('');
  const emailInput = useInput('');
  useEffect(() => {
    idnameInput.onReset();
    emailInput.onReset();
  }, [idMode]);
  return (
    <>
      <Container>
        <InputListContainer>
          <InputContainer>
            <Input Style={inputStyle} {...idnameInput} />
            <PlaceHolder value={idnameInput.value}>
              {idMode ? '이름' : '아이디'}
            </PlaceHolder>
          </InputContainer>
        </InputListContainer>
        <InputListContainer>
          <InputContainer>
            <Input Style={inputStyle} {...emailInput} />
            <PlaceHolder value={emailInput.value}>이메일 주소</PlaceHolder>
          </InputContainer>
        </InputListContainer>
      </Container>
      <NormalButton Style={normalButtonStyle}>
        {idMode ? '아이디 찾기' : '이메일로 임시 비밀번호 전송'}
      </NormalButton>
    </>
  );
}

FindInputForm.propTypes = {
  isOpen: propTypes.bool,
  modeDispatch: propTypes.object,
  idMode: propTypes.bool,
};

export default FindInputForm;
