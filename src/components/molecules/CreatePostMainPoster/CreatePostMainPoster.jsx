import React from 'react';
import propTypes from 'prop-types';
import { Poster } from '../../atoms';
import { Container, posterStyle } from './styles';

function CreatePostMainPoster({ src, alt }) {
  return (
    <Container>
      <Poster Style={posterStyle} src={src} alt={alt} />
    </Container>
  );
}
CreatePostMainPoster.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
};
export default React.memo(CreatePostMainPoster);
