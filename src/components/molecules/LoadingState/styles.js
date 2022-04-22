import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  padding: 15px;
  border-radius: 5px;
  background: #000000d1;
  color: white;
  & + span {
    margin-left: 10px;
  }
`;

export { Container };
