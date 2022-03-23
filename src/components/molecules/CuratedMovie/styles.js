import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0 0px 0;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 15px 0;
`;

const ContentContainer = styled.div`
  width: 130px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 100px;
  margin: 0 auto;
  border: 4px solid #88333f;
`;

const Poster = styled.img`
  width: 80px;
  height: 100px;
  vertical-align: middle;
`;
const MovieTitle = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
export {
  Container,
  Title,
  Contents,
  ContentContainer,
  ImageContainer,
  Poster,
  MovieTitle,
};
