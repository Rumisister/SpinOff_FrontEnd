import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 3.125rem;
  height: 4.375rem;
  margin: 0 1.25rem;
`;

const InfoContainer = styled.div``;

const MovieTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5625rem;
  margin-bottom: 0.1875rem;
  color: #000000;
`;

const MovieDirector = styled.div`
  font-size: 0.9375rem;
  line-height: 1.1875rem;
  font-weight: 600;
  color: #585858;
`;

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '0',
  textIndent: '-624.9375rem',
};
export {
  Container,
  InfoContainer,
  MovieTitle,
  MovieDirector,
  ImageContainer,
  imageStyle,
};
