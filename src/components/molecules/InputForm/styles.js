import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 30px;
`;
const InputContainer = styled.div`
  position: relative;
  border: 1px solid #f24860;
  width: 75%;
  height: 36px;
  margin: 0 0 0 auto;
  border-radius: 50px;
  box-sizing: border-box;
`;

const Span = styled.span`
  color: #808080;
  font-size: 20;
  font-weight: bold;
`;

export { Container, InputContainer, Span };
