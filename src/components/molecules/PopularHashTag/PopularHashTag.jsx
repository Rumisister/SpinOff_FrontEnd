import React from 'react';
import propTypes from 'prop-types';
import { Container, Title, Contents, HashTag, TagBox, TagText } from './styles';

// const dummies = [
//   {
//     id: 0,
//     title: '크리스마스',
//   },
//   {
//     id: 1,
//     title: '라라랜드',
//   },
//   {
//     id: 2,
//     title: '겨울필수_영화리스트',
//   },
//   {
//     id: 3,
//     title: '감성영화',
//   },
//   {
//     id: 4,
//     title: '애니영화',
//   },
//   {
//     id: 5,
//     title: '액션영화',
//   },
// ];

function PopularHashTag({ contents }) {
  return (
    <Container>
      <Title>인기 해시태그</Title>
      {contents.length > 0 ? (
        <Contents>
          {contents.map(content => {
            return (
              <TagBox key={content.id}>
                <HashTag />
                <TagText>{`#${content.content}`}</TagText>
              </TagBox>
            );
          })}
        </Contents>
      ) : null}
    </Container>
  );
}
PopularHashTag.propTypes = {
  contents: propTypes.array,
};
export default PopularHashTag;
