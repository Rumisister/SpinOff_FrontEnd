import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 47%;
  width: 53%;
  height: 100%;
  z-index: -1;
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  transform: ${props => props?.active && 'translateX(95%)'};
  transition: 1s;
`;

export { Container };
