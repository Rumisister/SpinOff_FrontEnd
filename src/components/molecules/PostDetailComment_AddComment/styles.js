import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 0.9375rem;
  height: 3.1875rem;
  overflow: auto;
`;
const TextAreaContainer = styled.div`
  flex: 1;
`;
const imgStyle = {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '2.5rem',
};
const textAreaStyle = {
  width: '100%',
  height: '3.1875rem',
  fontSize: '0.9375rem',
  padding: '5px 0',
  placeholder: {
    color: '#C4C4C4',
    fontWeight: '400',
    fontSize: '0.9375rem',
  },
};
const normalButtonStyle = {
  background: '#F24860',
  width: '3.75rem',
  height: '2.25rem',
  color: 'white',
  fontSize: '1.0625rem',
  borderRadius: '1.125rem',
  fontWeight: '700',
  hover: {
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #F24860',
    transition: '0.3s',
  },
};
export {
  Container,
  imgStyle,
  textAreaStyle,
  TextAreaContainer,
  normalButtonStyle,
};
