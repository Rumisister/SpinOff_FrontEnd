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
  SubCaption,
  posterStyle2,
  posterStyle3,
} from './styles';
import { NormalButton, Poster } from '../../atoms';
import DefaultRedProfile from '../../../assets/images/DefaultRedProfile.png';
import MovieCard from '../../../assets/images/MovieCard.png';

function Post({ title, poster, onLoad, type, profile, genre, subTitle }) {
  console.log('리런더링 포스트!!');
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
      {type === 'post' ? (
        <SubCaption>
          <Poster
            Style={posterStyle2}
            src={profile || DefaultRedProfile}
            alt={title}
          />
          {subTitle}
        </SubCaption>
      ) : null}
      {type === 'movie' ? (
        <SubCaption>
          <Poster Style={posterStyle3} src={MovieCard} alt={title} />
          {genre.reduce((acc, pos, idx) => {
            if (idx === genre.length - 1) return acc + pos;
            return acc + pos + ', ';
          }, '')}
        </SubCaption>
      ) : null}
    </PostContainer>
  );
}

Post.propTypes = {
  title: propTypes.string,
  poster: propTypes.string,
  onLoad: propTypes.func,
  type: propTypes.string,
  profile: propTypes.string,
  genre: propTypes.array,
  subTitle: propTypes.string,
};

export default React.memo(Post);
