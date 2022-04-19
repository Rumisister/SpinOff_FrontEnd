import React from 'react';
import propTypes from 'prop-types';
import {
  PostContainer,
  PostCaption,
  ImageContainer,
  ImageHover,
  External,
  More,
  buttonStyle,
  posterStyle,
} from './styles';
import { NormalButton, Poster } from '../../atoms';

function Post({ title, poster, onLoad }) {
  return (
    <PostContainer>
      <ImageContainer>
        <Poster Style={posterStyle} src={poster} alt={title} onLoad={onLoad} />
        <ImageHover>
          <NormalButton Style={buttonStyle}>저장</NormalButton>
          <External />
          <More />
        </ImageHover>
      </ImageContainer>
      <PostCaption>{title}</PostCaption>
    </PostContainer>
  );
}

Post.propTypes = {
  title: propTypes.string,
  poster: propTypes.string,
  onLoad: propTypes.func,
};

export default Post;
