import React from 'react';
import propTypes from 'prop-types';
import {
  ButtonContainer,
  CollectionInfo,
  CollectionInfoContainer,
  CollectionInfoFollowing,
  CollectionInfoMember,
  CollectionInfoName,
  Container,
  normalButtonStyle,
  posterStyle,
} from './styles';
import { NormalButton, Poster } from '../../atoms';
import defaultImage from '../../../assets/images/defaultThumbnail.png';

function SearchResultCollection({ type, content, onLoad }) {
  return (
    <Container type={type}>
      {content?.thumbnailUrl ? (
        <Poster
          src={content.thumbnailUrl}
          Style={{ ...posterStyle, width: '100%' }}
        />
      ) : null}
      {content?.thumbnailUrls
        ? content.thumbnailUrls.map((url, idx) => {
            return (
              <Poster
                key={idx}
                src={url}
                Style={{
                  ...posterStyle,
                  width: `${
                    type === 'all'
                      ? 300 / content.thumbnailUrls.length
                      : 400 / content.thumbnailUrls.length
                  }px`,
                }}
                onLoad={onLoad}
              />
            );
          })
        : null}
      {!content?.thumbnailUrl || !content?.thumbnailUrls?.length === 0 ? (
        <Poster src={defaultImage} Style={{ ...posterStyle, width: '100%' }} />
      ) : null}

      <CollectionInfoContainer>
        <CollectionInfo>
          <CollectionInfoFollowing>
            {content.followingMemberNickname
              ? `${content.followingMemberNickname}님 외 ${content.followingCount} 명이 팔로우`
              : `${content.followingCount}명이 팔로우`}
          </CollectionInfoFollowing>
          <CollectionInfoName>{`${content.collectionTitle}`}</CollectionInfoName>
          <CollectionInfoMember>{`${content.memberNickName}(@${content.memberAccountId})`}</CollectionInfoMember>
        </CollectionInfo>
        <ButtonContainer>
          <NormalButton Style={normalButtonStyle}>팔로우</NormalButton>
        </ButtonContainer>
      </CollectionInfoContainer>
    </Container>
  );
}

SearchResultCollection.propTypes = {
  type: propTypes.string,
  content: propTypes.object,
  onLoad: propTypes.func,
};

export default React.memo(SearchResultCollection);
