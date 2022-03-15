import styled from 'styled-components';

const Container = styled.div`
  margin-top: auto;
  width: 100%;
  user-select: none;
`;

const InputListContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 30px;
`;

const H1 = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 30px;
  font-weight: bold;
  margin: auto 5px 40px 30px;
`;

const Span = styled.span`
  color: #808080;
  font-size: 20;
  font-weight: bold;
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

const Ul = styled.ul`
  color: #808080;
  font-size: 12px;
  padding: 0;
`;
const Li = styled.li`
  margin: 15px 50px;
`;
const BackLogin = styled.span`
  font-size: 14px;
  margin: 0 0 0 auto;
  color: #808080;
`;

const inputStyle = {
  padding: '10px 15px',
  backGround: 'transparent',
  width: '100%',
  fontSize: '14px',
};
const inputStyle2 = {
  padding: '10px 15px',
  backGround: 'transparent',
  width: '70%',
  fontSize: '14px',
};

const textButtonStyle = {
  position: 'absolute',
  right: '5px',
  top: '8px',
  color: '#808080',
  fontSize: '15px',
  fontWeight: 'bold',
};
const textButtonStyle2 = {
  color: '#F24860',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'underline',
};
const textButtonStyle3 = {
  color: '#0095F6',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'underline',
};
const normalButtonStyle = {
  fontSize: '20px',
  background: '#F9CF00',
  fontWeight: 'bold',
  width: '100%',
  height: '40px',
  margin: '15px auto',
  borderRadius: '30px',
};
export {
  Container,
  InputListContainer,
  H1,
  Span,
  InputContainer,
  inputStyle,
  inputStyle2,
  textButtonStyle,
  textButtonStyle2,
  textButtonStyle3,
  normalButtonStyle,
  BackLogin,
  Ul,
  Li,
};
