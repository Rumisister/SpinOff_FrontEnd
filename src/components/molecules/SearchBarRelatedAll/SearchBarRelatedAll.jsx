import React from 'react';
import propTypes from 'prop-types';
import {
  posterStyle,
  RelatedContainer,
  RelatedIcon,
  RelatedTitle,
} from './styles';
import magnifier from '../../../assets/images/magnifier.png';
import { Poster } from '../../atoms';

const dummies = {
  collections: [
    {
      content: '아이가 함께 나오는 영화 모음',
      id: 0,
    },
  ],
  hashtags: [
    {
      content: '아이유가 나오는',
      id: 123,
    },
  ],
  members: [
    {
      accountId: 'dlwlrma',
      id: 0,
      nickname: '아이유우',
      profileImg:
        'http://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg',
    },
  ],
  movies: [
    {
      imageUrl: 'https://i.ytimg.com/vi/zxcEi7vX_vA/maxresdefault.jpg',
      movieId: 0,
      title: '아이언맨',
    },
  ],
  posts: [
    {
      id: 123,
      title: '아이스로드가 성공한 이유',
    },
  ],
};

function SearchBarRelatedAll({ contents }) {
  console.log(contents);
  return (
    <>
      {dummies.members.map(d => (
        <RelatedContainer key={d.id}>
          <RelatedIcon>
            <Poster
              src={
                d.profileImg ||
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              }
              Style={posterStyle}
            />
          </RelatedIcon>
          <RelatedTitle>
            {d.nickname} (@{d.accountId})
          </RelatedTitle>
        </RelatedContainer>
      ))}
      {dummies.posts.map(d => (
        <RelatedContainer key={d.id}>
          <RelatedIcon>
            <Poster
              src={magnifier}
              Style={{ ...posterStyle, width: '20x', height: '20px' }}
            />
          </RelatedIcon>
          <RelatedTitle>{d.title}</RelatedTitle>
        </RelatedContainer>
      ))}
      {dummies.hashtags.map(d => (
        <RelatedContainer key={d.id}>
          <RelatedIcon>
            <Poster
              src={magnifier}
              Style={{ ...posterStyle, width: '20x', height: '20px' }}
            />
          </RelatedIcon>
          <RelatedTitle>#{d.content}</RelatedTitle>
        </RelatedContainer>
      ))}
      {dummies.collections.map(d => (
        <RelatedContainer key={d.id}>
          <RelatedIcon>
            <Poster
              src={magnifier}
              Style={{ ...posterStyle, width: '20x', height: '20px' }}
            />
          </RelatedIcon>
          <RelatedTitle>{d.content}</RelatedTitle>
        </RelatedContainer>
      ))}
      {dummies.movies.map(d => (
        <RelatedContainer key={d.movieId}>
          <RelatedIcon>
            <Poster src={d.imageUrl} Style={posterStyle} />
          </RelatedIcon>
          <RelatedTitle>{d.title}</RelatedTitle>
        </RelatedContainer>
      ))}
    </>
  );
}

SearchBarRelatedAll.propTypes = {
  contents: propTypes.object,
};
export default SearchBarRelatedAll;
