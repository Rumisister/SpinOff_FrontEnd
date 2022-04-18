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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HeaderBar({ isSignIn }) {
  const member_id = useSelector(state => state.authReducer.member_id);
  //console.log(member_id + '^^^^^^^^^^^^^');
  const history = useNavigate();
  return (
    <>
      <HeaderLeftContainer>
        <TextButton Style={buttonStyle}>도슨트</TextButton>
        <TextButton Style={buttonStyle}>소셜링</TextButton>
      </HeaderLeftContainer>
      <LogoContainer>
        <Logo onClick={() => history('/')} />
      </LogoContainer>
      <HeaderRightContainer>
        {isSignIn ? (
          <>
            <HeaderMenuModal IconType={Notice} />
            <HeaderMenuModal IconType={DM} />
            <Profile
              onClick={() =>
                history('/MyPage', {
                  state: {
                    member_id,
                  },
                })
              }
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
