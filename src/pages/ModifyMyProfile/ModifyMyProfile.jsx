import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { offSearchBar, onSearchBar } from '../../store/NeedSearchBar/action';

import {
  ContainerLeft,
  OffModifyButton,
  ContainerRight,
  Container,
  Title,
  InputBox,
  TitleBox,
} from './styles';

function ModifyMyProfile() {
  const dispatch = useDispatch();
  const memberId = new URLSearchParams(useLocation().search).get('member_id');
  useEffect(() => {
    dispatch(offSearchBar());
    return () => {
      dispatch(onSearchBar());
    };
  }, []);
  return (
    <Container>
      <ContainerLeft member_id={memberId}>
        <OffModifyButton>프로필 변경</OffModifyButton>
        <OffModifyButton>비밀번호 변경</OffModifyButton>
        <OffModifyButton>알림</OffModifyButton>
        <OffModifyButton>신고/차단</OffModifyButton>
      </ContainerLeft>
      <ContainerRight>
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
      </ContainerRight>
    </Container>
  );
}

export default ModifyMyProfile;
