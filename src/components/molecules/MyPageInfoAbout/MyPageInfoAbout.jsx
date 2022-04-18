import React from 'react';
import propTypes from 'prop-types';
import {
  Container,
  EachTypeContainer,
  MessageContainer,
  NameContainer,
  RelatedContainer,
  RelatedType,
  RelatedValue,
} from './styles';

function MyPageInfoAbout({ info }) {
  console.log(info);
  return (
    <Container>
      <NameContainer>마블링(@ID)</NameContainer>
      <MessageContainer>
        {info.bio || '상태메세지를 등록해 주세요'}
      </MessageContainer>
      <RelatedContainer>
        <EachTypeContainer>
          <RelatedType>큐레이션</RelatedType>
          <RelatedValue>1,234</RelatedValue>
        </EachTypeContainer>
        <EachTypeContainer>
          <RelatedType>팔로워</RelatedType>
          <RelatedValue>{info.followerSize}</RelatedValue>
        </EachTypeContainer>
        <EachTypeContainer>
          <RelatedType>팔로잉</RelatedType>
          <RelatedValue>{info.followingSize}</RelatedValue>
        </EachTypeContainer>
      </RelatedContainer>
    </Container>
  );
}
MyPageInfoAbout.propTypes = {
  info: propTypes.object,
};
export default React.memo(MyPageInfoAbout);
