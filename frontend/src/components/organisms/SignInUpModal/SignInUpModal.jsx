import React, { useState } from 'react';
import {
  LeftContainer,
  Planet,
  RightContainer,
  SignContainer,
  Modal,
  Xmark,
  textButtonStyle,
} from './styles';
import { TextButton } from '../../atoms';
import { SignInfoForm, SignInForm, SignUpForm } from '../../molecules';
import SignModeHook from './SignModeHook';
import FindForm from '../FindForm';
function SignInUpModal() {
  const [open, setOpen] = useState(false);
  const signMode = SignModeHook();
  console.log(signMode);
  const onSignForm = () => {
    document.body.style.overflow = 'hidden';
    setOpen(prev => !prev);
  };

  const closeSignForm = () => {
    document.body.style.overflow = 'unset';
    setOpen(prev => !prev);
    signMode.onReset();
  };
  return (
    <>
      <TextButton onClick={onSignForm} Style={textButtonStyle}>
        로그인/회원가입
      </TextButton>
      <Modal isOpen={open}>
        <Xmark onClick={closeSignForm} />
        <SignContainer>
          <LeftContainer>
            <Planet />
          </LeftContainer>
          <RightContainer>
            {signMode.state.SIGN_IN && (
              <SignInForm isOpen={open} modeDispatch={signMode} />
            )}
            {signMode.state.SIGN_UP && (
              <SignUpForm isOpen={open} modeDispatch={signMode} />
            )}
            {signMode.state.SIGN_INFO && (
              <SignInfoForm isOpen={open} modeDispatch={signMode} />
            )}
            {signMode.state.FIND_INFO && (
              <FindForm isOpen={open} modeDispatch={signMode} />
            )}
          </RightContainer>
        </SignContainer>
      </Modal>
    </>
  );
}

export default SignInUpModal;
