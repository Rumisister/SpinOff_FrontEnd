import React from 'react';
import {
  LogoContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  buttonStyle,
} from './styles';
import { Notice, DM, Logo, Profile, TextButton } from '../../atoms';
import { HeaderMenuModal } from '../../molecules';
import { SignInUpModal } from '..';

function Header() {
  const isLoggin = true;
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
        {isLoggin ? (
          <>
            <SignInUpModal />
          </>
        ) : (
          <>
            <HeaderMenuModal IconType={Notice} />
            <HeaderMenuModal IconType={DM} />
            <Profile padding="20px" />
          </>
        )}
      </HeaderRightContainer>
    </>
  );
}

export default Header;
