import React from 'react';
import { TextButton } from '../../atoms';
import { buttonStyle, Container, Contents, Title } from './styles';

const dummies = [
  { id: 0, title: '어바웃타임' },
  { id: 1, title: '크리스마스' },
  { id: 2, title: '해리포터' },
  { id: 3, title: '판타지' },
  { id: 4, title: '다크나이트' },
];
function RecentlySearch() {
  return (
    <Container>
      <Title>최근 검색 기록</Title>
      <Contents>
        {dummies.map(dummy => {
          return (
            <TextButton key={dummy.id} Style={buttonStyle}>
              {dummy.title}
            </TextButton>
          );
        })}
      </Contents>
    </Container>
  );
}

export default RecentlySearch;
