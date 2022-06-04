import React from 'react';
import propTypes from 'prop-types';
import { Container, ImgContainer, posterStyle, Title } from './styles';
import { Poster } from '../../atoms';

function SearchResultMovie({ content }) {
  return (
    <Container>
      <ImgContainer>
        <Poster src={content.imageUrl} Style={posterStyle}></Poster>
        <Title>{content.title}</Title>
      </ImgContainer>
    </Container>
  );
}

SearchResultMovie.propTypes = {
  content: propTypes.array,
};

export default SearchResultMovie;
