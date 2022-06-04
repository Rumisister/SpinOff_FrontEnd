import React from 'react';
import {
  Container,
  CuratorContainer,
  ImgContainer,
  InfoContainer,
  MailContainer,
  NickContainer,
  posterStyle,
  Title,
} from './styles';
import propTypes from 'prop-types';
import { Poster } from '../../atoms';
import DefaultRedProfile from '../../../assets/images/DefaultRedProfile.png';

function SearchResultAllCurator({ content }) {
  return (
    <Container>
      <Title>큐레이터</Title>
      {content.map(t => {
        return (
          <CuratorContainer key={t.id}>
            <ImgContainer>
              <Poster
                Style={posterStyle}
                src={t.profileImg || DefaultRedProfile}
              />
            </ImgContainer>
            <InfoContainer>
              <NickContainer>{t.nickname}</NickContainer>
              <MailContainer>{`@${t.accountId}`}</MailContainer>
            </InfoContainer>
          </CuratorContainer>
        );
      })}
    </Container>
  );
}
SearchResultAllCurator.propTypes = {
  content: propTypes.array,
};
export default SearchResultAllCurator;
