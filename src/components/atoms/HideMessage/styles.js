import styled from 'styled-components';

const Container = styled.div`
  display: ${props => (props?.Shown ? 'flex' : 'none')};
  margin: -10px 30px 10px 30px;
`;
const Message = styled.div`
  width: 70%;
  margin: 0 0 0 auto;
  color: ${props => props?.color || ''};
  font-size: 12px;
  font-weight: bold;
`;

export { Container, Message };
