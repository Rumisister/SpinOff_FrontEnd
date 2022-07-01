import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 70px;
  margin: 0 20px;
`;

const InfoContainer = styled.div``;

const MovieTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 3px;
  color: #000000;
`;

const MovieDirector = styled.div`
  font-size: 15px;
  line-height: 19px;
  font-weight: 600;
  color: #585858;
`;

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '0',
  textIndent: '-9999px',
};
export {
  Container,
  InfoContainer,
  MovieTitle,
  MovieDirector,
  ImageContainer,
  imageStyle,
};
