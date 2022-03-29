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
import { SignInfoForm, SignInForm, SignUpSuccessForm } from '../../molecules';
import { SignUpForm } from '..';
import SignModeHook from './SignModeHook';
import FindForm from '../FindForm';
import { useDispatch } from 'react-redux';
import { onReset } from '../../../store/SignUp/action';
function SignInUpModal() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const signMode = SignModeHook();
  const onSignForm = () => {
    document.body.style.overflow = 'hidden';
    setOpen(prev => !prev);
  };

  const closeSignForm = () => {
    document.body.style.overflow = 'unset';
    setOpen(prev => !prev);
    signMode.onReset();
    dispatch(onReset());
  };
  return (
    <>
      <TextButton onClick={onSignForm} Style={textButtonStyle}>
        로그인/회원가입
      </TextButton>
      {open ? (
        <Modal isOpen={open}>
          <Xmark onClick={closeSignForm} />
          <SignContainer>
            {signMode.state.SIGNUP_SUCCESS ? (
              <SignUpSuccessForm />
            ) : (
              <>
                <LeftContainer>
                  <Planet />
                </LeftContainer>
                <RightContainer>
                  {signMode.state.SIGN_IN ? (
                    <SignInForm isOpen={open} modeDispatch={signMode} />
                  ) : null}
                  {signMode.state.SIGN_UP ? (
                    <SignUpForm isOpen={open} modeDispatch={signMode} />
                  ) : null}
                  {signMode.state.SIGN_INFO ? (
                    <SignInfoForm isOpen={open} modeDispatch={signMode} />
                  ) : null}
                  {signMode.state.FIND_INFO ? (
                    <FindForm isOpen={open} modeDispatch={signMode} />
                  ) : null}
                </RightContainer>
              </>
            )}
          </SignContainer>
        </Modal>
      ) : null}
    </>
  );
}

export default SignInUpModal;
