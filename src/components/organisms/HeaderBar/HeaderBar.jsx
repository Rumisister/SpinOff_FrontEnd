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

function HeaderBar({ isSignIn }) {
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
            <Profile padding="20px" />
          </>
        ) : (
          <>
            <SignInUpModal isSignIn={isSignIn} />
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
