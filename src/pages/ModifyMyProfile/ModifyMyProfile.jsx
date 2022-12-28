import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { offSearchBar, onSearchBar } from '../../store/NeedSearchBar/action';
import { TextButton } from '../../components/atoms';
import {
  ContainerLeft,
  ContainerRight,
  Container,
  Title,
  InputBox,
  TitleBox,
  PosterContainer,
  textButtonStyle,
  TitleContainer,
  TextButtonContainer,
  ProfileTop,
  ProfileBottom,
  InputBox2,
} from './styles';

function ModifyMyProfile() {
  const dispatch = useDispatch();
  const memberId = new URLSearchParams(useLocation().search).get('member_id');
  const [contentType, setContentType] = useState('profile');
  const [profile, setProfile] = useState(true);
  useEffect(() => {
    dispatch(offSearchBar());
    return () => {
      dispatch(onSearchBar());
    };
  }, []);

  const modifying = () => {
    console.log('버튼클릭');
    if (contentType === 'profile') {
      setProfile(true);
    } else if (contentType === 'password') {
      console.log(contentType);
    }
  };

  return (
    <Container>
      <ContainerLeft member_id={memberId}>
        <TextButtonContainer>
          <TextButton
            onClick={() => {
              setContentType('profile');
              modifying();
            }}
            Style={textButtonStyle}
          >
            프로필 변경
          </TextButton>
          <TextButton
            onClick={() => {
              setContentType('password');
              modifying();
            }}
            Style={textButtonStyle}
          >
            비밀번호 변경
          </TextButton>
          <TextButton onClick={modifying} Style={textButtonStyle}>
            알림 변경
          </TextButton>
          <TextButton onClick={modifying} Style={textButtonStyle}>
            신고/차단
          </TextButton>
        </TextButtonContainer>
      </ContainerLeft>
      <ContainerRight>
        {profile && (
          <>
            <ProfileTop>
              <PosterContainer></PosterContainer>
              <TitleContainer>
                <TitleBox>
                  <Title>닉네임</Title>
                  <InputBox placeholder="최소 2글자 ~ 최대 8자"></InputBox>
                </TitleBox>
                <TitleBox>
                  <Title>아이디</Title>
                  <InputBox></InputBox>
                </TitleBox>
                <TitleBox>
                  <Title>웹사이트</Title>
                  <InputBox></InputBox>
                </TitleBox>
              </TitleContainer>
            </ProfileTop>
            <ProfileBottom>
              <TitleBox Box>
                <Title bottom>프로필소개</Title>
                <InputBox2 placeholder="나를 소개할 수 있는 프로필 메세지를 작성해주세요."></InputBox2>
              </TitleBox>
            </ProfileBottom>
          </>
        )}
      </ContainerRight>
    </Container>
  );
}

export default ModifyMyProfile;
