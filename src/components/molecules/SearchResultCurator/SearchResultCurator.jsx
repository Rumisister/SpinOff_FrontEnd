import React from 'react';
import propTypes from 'prop-types';
import { NormalButton, Poster } from '../../atoms';
import {
  ButtonContainer,
  Container,
  CuratorInfo,
  CuratorInfoContainer,
  CuratorInfoFollowing,
  CuratorInfoMember,
  CuratorInfoName,
  normalButtonStyle,
  posterStyle,
  posterStyle2,
  ProfileContainer,
} from './styles';
import defaultImage from '../../../assets/images/defaultThumbnail.png';

function SearchResultCurator({ content }) {
  return (
    <Container>
      {content.thumbnailUrls
        ? content.thumbnailUrls.map((url, idx) => {
            return (
              <Poster
                key={idx}
                src={url}
                Style={{
                  ...posterStyle,
                  width: `${400 / content.thumbnailUrls.length}px`,
                }}
              />
            );
          })
        : null}
      {content?.thumbnailUrls?.length === 0 ? (
        <Poster src={defaultImage} Style={{ ...posterStyle, width: '100%' }} />
      ) : null}

      <CuratorInfoContainer>
        <CuratorInfo>
          <CuratorInfoFollowing>
            {content.followingMemberNickname
              ? `${content.followingMemberNickname}님 외 ${content.followingCount} 명이 팔로우`
              : `${content.followingCount}명이 팔로우`}
          </CuratorInfoFollowing>
          <CuratorInfoMember>{`${content.nickname}(@${content.accountId})`}</CuratorInfoMember>
          <CuratorInfoName>{`${content.bio}`}</CuratorInfoName>
        </CuratorInfo>
        <ButtonContainer>
          <ProfileContainer>
            <Poster src={content.profileImg} Style={posterStyle2} />
          </ProfileContainer>
          <NormalButton Style={normalButtonStyle}>팔로우</NormalButton>
        </ButtonContainer>
      </CuratorInfoContainer>
    </Container>
  );
}
SearchResultCurator.propTypes = {
  content: propTypes.object,
};
export default SearchResultCurator;
