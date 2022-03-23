import React from 'react';
import {
  Container,
  ContentContainer,
  Contents,
  ImageContainer,
  MovieTitle,
  Poster,
  Title,
} from './styles';

const dummies = [
  {
    id: 0,
    title: '어바웃타임',
    url: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F70b98d60-602f-4152-9064-556ee62a22fd%2F%EC%96%B4%EB%B0%94%EC%9B%83%ED%83%80%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?table=block&id=d1d6da68-49f3-42c2-95d8-b089db3254ef&spaceId=8286226f-c017-460e-97aa-ca53116fac84&width=2000&userId=fdd93fae-3175-4a69-b565-60b84abf2546&cache=v2',
  },
  {
    id: 1,
    title: '스파이더맨:노웨어홈',
    url: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31f91666-b0c3-4b40-97f2-fc667379f2cd%2F%EC%9E%91%EC%9D%80%EC%95%84%EC%94%A8%EB%93%A4_%EB%A6%AC%EB%B7%B0.jpg?table=block&id=5894c093-d372-461e-97b0-85845bae39fb&spaceId=8286226f-c017-460e-97aa-ca53116fac84&width=2000&userId=fdd93fae-3175-4a69-b565-60b84abf2546&cache=v2',
  },
  {
    id: 2,
    title: '터널',
    url: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fab678c1b-812a-42e6-86a3-58966b8c90ce%2F%EC%BA%A1%ED%8B%B4%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4_%EB%A6%AC%EB%B7%B0.jpg?table=block&id=db03caf3-69a8-4dfb-bee7-232288dff937&spaceId=8286226f-c017-460e-97aa-ca53116fac84&width=2000&userId=fdd93fae-3175-4a69-b565-60b84abf2546&cache=v2',
  },
  {
    id: 3,
    title: '나는 내일 어제의 너와 만난다',
    url: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9567dad5-2acf-44d1-b7be-4b0720bf5fda%2F%EB%9D%BC%EB%9D%BC%EB%9E%9C%EB%93%9C%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?table=block&id=ac6834e0-354d-4e01-9404-71fea0b61551&spaceId=8286226f-c017-460e-97aa-ca53116fac84&width=2000&userId=fdd93fae-3175-4a69-b565-60b84abf2546&cache=v2',
  },
];

function CuratedMoive() {
  return (
    <Container>
      <Title>큐레이션된 영화</Title>
      <Contents>
        {dummies.map(dummy => {
          return (
            <ContentContainer key={dummy.id}>
              <ImageContainer>
                <Poster src={dummy.url} alt={dummy.title} />
              </ImageContainer>
              <MovieTitle>{dummy.title}</MovieTitle>
            </ContentContainer>
          );
        })}
      </Contents>
    </Container>
  );
}

export default CuratedMoive;
