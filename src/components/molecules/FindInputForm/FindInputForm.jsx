import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import {
  Container,
  InputListContainer,
  InputContainer,
  inputStyle,
  PlaceHolder,
  normalButtonStyle,
  FindResult,
} from './styles';
import { Input, NormalButton } from '../../atoms';
import { useInput } from '../../../Hooks';
import { axios } from '../../../api';

function FindInputForm({ isOpen, modeDispatch, idMode }) {
  console.log(isOpen);
  console.log(modeDispatch);
  const idnameInput = useInput('');
  const emailInput = useInput('');
  const [findSuccess, setFindSuccess] = useState(false);
  const [findError, setFindError] = useState(false);
  console.log(findError);
  useEffect(() => {
    idnameInput.onReset();
    emailInput.onReset();
    setFindSuccess(false);
    setFindError(false);
    return () => {
      idnameInput.onReset();
      emailInput.onReset();
    };
  }, [idMode]);
  const requestFindId = async email => {
    console.log(email + '씨발!!');
    const res = await axios({
      method: 'get',
      url: '/api/sign/forget/account-id',
      data: null,
      params: { email },
    });
    console.log(res);
    return res;
  };
  const requestFindPw = async id => {
    const res = await axios({
      method: 'patch',
      url: '/api/sign/forget/account-pw',
      data: null,
      params: { accountId: id },
    });

    return res;
  };
  const onClickFind = async () => {
    console.log('들ㅇ옴!!!!');
    try {
      if (idMode) {
        const res = await requestFindId(emailInput.value);
        console.log(res + '@@');
        setFindSuccess(true);
        setFindError(false);
      } else {
        const {
          data: {
            data: { message },
          },
        } = await requestFindPw(idnameInput.value);
        console.log(message);
        setFindSuccess(true);
        setFindError(false);
      }
    } catch (error) {
      setFindSuccess(false);
      setFindError(true);
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        {findSuccess && !findError ? (
          <>
            <FindResult>
              등록된
              <br />
              <span style={{ fontWeight: 'bold', fontSize: '26px' }}>
                {emailInput.value}
              </span>
              <br />로 {idMode ? '아이디' : '임시 비밀번호'}가 전송 되었습니다.
            </FindResult>
          </>
        ) : (
          <>
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
          </>
        )}
      </Container>
      <NormalButton
        Style={normalButtonStyle}
        onClick={onClickFind}
        disabled={findSuccess && !findError}
      >
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
