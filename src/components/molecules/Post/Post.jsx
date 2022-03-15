import React from 'react';
import propTypes from 'prop-types';
import {
  PostContainer,
  PostCaption,
  PostImage,
  ImageContainer,
  ImageHover,
  External,
  More,
  buttonStyle,
} from './styles';
import { NormalButton } from '../../atoms';

function Post({ title, poster }) {
  return (
    <PostContainer>
      <ImageContainer>
        <PostImage src={poster} alt={title} />
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
};

export default Post;
