import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 4.375rem auto 0 auto;
  width: 65.375rem;
  height: 54.6875rem;
  box-shadow: 0rem 0.25rem 0.625rem 0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
  transform: ${props => props?.active && 'translateX(-25%)'};
  transition: 0.3s;
`;

export { Container };
