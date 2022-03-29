import React from 'react';
import propTypes from 'prop-types';
import {
  LogoContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  buttonStyle,
} from './styles';
import { Notice, DM, Logo, Profile, TextButton } from '../../atoms';
import { HeaderMenuModal } from '../../molecules';
import { SignInUpModal } from '..';
import { useDispatch } from 'react-redux';
import { DEL_TOKEN } from '../../../store/Auth/action';

function HeaderBar({ isSignIn }) {
  const dispatch = useDispatch();
  return (
    <>
      <HeaderLeftContainer>
        <TextButton Style={buttonStyle}>도슨트</TextButton>
        <TextButton Style={buttonStyle}>소셜링</TextButton>
      </HeaderLeftContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <HeaderRightContainer>
        {isSignIn ? (
          <>
            <HeaderMenuModal IconType={Notice} />
            <HeaderMenuModal IconType={DM} />
            <Profile
              onClick={() => dispatch({ type: DEL_TOKEN })}
              padding="20px"
            />
          </>
        ) : (
          <>
            <SignInUpModal />
          </>
        )}
      </HeaderRightContainer>
    </>
  );
}

HeaderBar.propTypes = {
  isSignIn: propTypes.bool,
};
export default HeaderBar;
