import React from 'react';
import { Container, Title, Contents, HashTag, TagBox, TagText } from './styles';

const dummies = [
  {
    id: 0,
    title: '크리스마스',
  },
  {
    id: 1,
    title: '라라랜드',
  },
  {
    id: 2,
    title: '겨울필수_영화리스트',
  },
  {
    id: 3,
    title: '감성영화',
  },
  {
    id: 4,
    title: '애니영화',
  },
  {
    id: 5,
    title: '액션영화',
  },
];

function PopularHashTag() {
  return (
    <Container>
      <Title>인기 해시태그</Title>
      <Contents>
        {dummies.map(dummy => {
          return (
            <TagBox key={dummy.id}>
              <HashTag />
              <TagText>{`#${dummy.title}`}</TagText>
            </TagBox>
          );
        })}
      </Contents>
    </Container>
  );
}

export default PopularHashTag;
