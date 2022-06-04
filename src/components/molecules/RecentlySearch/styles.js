import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0 20px 0;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;

const buttonStyle = {
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '20px',
  padding: '10px 15px',
};
export { Container, Title, Contents, buttonStyle };
