import React from 'react';
import {
  Container,
  ImageContainer,
  imageStyle,
  InfoContainer,
  MovieDirector,
  MovieTitle,
} from './styles';
import propTypes from 'prop-types';
import { Poster } from '../../atoms';

const dummy = {
  thumbnail:
    'https://mblogthumb-phinf.pstatic.net/MjAxNjExMDhfMjA5/MDAxNDc4NTkwNTg1NjM5.5hOGA5ZNRXkFc4J3Lzn_19r5FwyNYMHqDyavJP4jt94g.N4nrWXvYdpG_3FI52n46wSe0C47Y2ssLcatYFLukERAg.JPEG.villa-seedae/villa-seedae_%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0_002.jpg?type=w800',
  title: '인터스텔라',
  directorName: '크리스토퍼 놀란',
};
function PostDetailLeftSide_Movie({ contents }) {
  console.log(contents);
  return (
    <Container>
      <ImageContainer>
        <Poster Style={imageStyle} src={dummy?.thumbnail} />
      </ImageContainer>
      <InfoContainer>
        <MovieTitle>{dummy?.title}</MovieTitle>
        <MovieDirector>{dummy?.directorName}</MovieDirector>
      </InfoContainer>
    </Container>
  );
}

PostDetailLeftSide_Movie.propTypes = {
  contents: propTypes.object,
};

export default React.memo(PostDetailLeftSide_Movie);
