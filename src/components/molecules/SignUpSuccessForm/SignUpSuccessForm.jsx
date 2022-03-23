import React from 'react';
import {
  Message,
  MessageStyle1,
  MessageStyle2,
  NormalButtonStyle,
  Planet,
  SuccessSignUpContainer,
  TextButtonStyle,
} from './styles';
import { NormalButton, TextButton } from '../../atoms';
import { useSelector } from 'react-redux';

function SignUpSuccessForm() {
  const name = useSelector(state => state.signUpReducer.inputs.name);
  return (
    <SuccessSignUpContainer>
      <Planet />
      <Message Style={MessageStyle1}>실시간 영화 큐레이션 공유 플랫폼</Message>
      <Message Style={MessageStyle2}>
        {name}님, <br />
        스핀오프의 새로운 큐레이터가 되신 것을 환영합니다.
      </Message>
      <Message>
        <NormalButton Style={NormalButtonStyle}>
          오늘의 큐레이션 보러가기
        </NormalButton>
      </Message>
      <Message Style={{ ...MessageStyle1, margin: '30px 0' }}>
        프로필 사진과 소개를 변경하고 싶다면{' '}
        <TextButton Style={TextButtonStyle}>여기</TextButton>로 이동하세요
      </Message>
    </SuccessSignUpContainer>
  );
}

export default SignUpSuccessForm;
