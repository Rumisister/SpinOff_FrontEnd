import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 0 60px;
  box-sizing: border-box;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const normalButtonStyle = {
  padding: '10px 20px',
  borderRadius: '30px',
  background: 'transparent',
  fontWeight: 'bold',
  fontSize: '18px',
  margin: '0 15px 0 0',
};

export { Container, normalButtonStyle };
