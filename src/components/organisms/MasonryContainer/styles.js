import styled from 'styled-components';

const Container = styled.div`
  visibility: ${props => (props.Visible ? 'visible' : 'hidden')};
  position: relative;
  width: 100%;
  user-select: none;
`;

export { Container };
