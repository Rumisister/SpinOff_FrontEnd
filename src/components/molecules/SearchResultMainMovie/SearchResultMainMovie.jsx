import React from 'react';
import propTypes from 'prop-types';
import {
  buttonStyle,
  buttonStyle2,
  Container,
  ImgContainer,
  MainContainerHover,
  MainMoiveContainer,
  MovieTitle,
  posterStyle,
} from './styles';
import { NormalButton, Poster } from '../../atoms';

function SearchResultMainMovie({ content }) {
  return (
    <Container>
      <MainMoiveContainer width={(content.thumbnails.length + 1) * 115 + 115}>
        <MainContainerHover>
          <NormalButton Style={buttonStyle}>저장</NormalButton>
          <NormalButton Style={buttonStyle2}>팔로우</NormalButton>
          <MovieTitle>{content.title}</MovieTitle>
        </MainContainerHover>
        <ImgContainer>
          <Poster src={content.imageUrl} Style={posterStyle} />
        </ImgContainer>
        {content.thumbnails.map((t, idx) => {
          return (
            <ImgContainer
              key={idx}
              left={idx * 115 + 115}
              zIndex={-(idx + 1)}
              side={true}
            >
              <Poster src={t} Style={posterStyle} />
            </ImgContainer>
          );
        })}
      </MainMoiveContainer>
    </Container>
  );
}

SearchResultMainMovie.propTypes = {
  content: propTypes.object,
};
export default SearchResultMainMovie;
