import styled from 'styled-components';

const Container = styled.div`
  height: 350px;
  width: 230px;
  border: 1px solid #f24860;
  border-radius: 30px; ;
`;
const ImgContainer = styled.div`
  height: 300px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: 25px;
  height: 50px;
`;
const posterStyle = {
  width: '230px',
  height: '100%',
  objectFit: 'cover',
  textIndent: ' -9999px',
  borderRadius: '30px 30px 0 0',
};

export { Container, Title, ImgContainer, posterStyle };
