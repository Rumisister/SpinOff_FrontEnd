import React from 'react';
import propTypes from 'prop-types';
import {
  posterStyle,
  RelatedContainer,
  RelatedIcon,
  RelatedTitle,
} from '../SearchBarRelatedAll/styles';
import { Poster } from '../../atoms';
import magnifier from '../../../assets/images/magnifier.png';

const dummies = [
  {
    content: '아이유가 나오는 영화',
    id: 0,
  },
  {
    content: '아이유가 나오는 드라마',
    id: 1,
  },
  {
    content: '아이유가 나오는 예능',
    id: 2,
  },
  {
    content: '아이유가 나오는 방송',
    id: 3,
  },
  {
    content: '아이유가 나오는 동네',
    id: 4,
  },
];

function SearchBarRelatedHashTag({ contents }) {
  console.log(contents);
  return (
    <>
      {dummies.map(d => (
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
    </>
  );
}

SearchBarRelatedHashTag.propTypes = {
  contents: propTypes.array,
};

export default SearchBarRelatedHashTag;
