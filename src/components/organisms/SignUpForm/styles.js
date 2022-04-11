import styled from 'styled-components';

const Container = styled.div`
  margin-top: auto;
  width: 100%;
  user-select: none;
`;

const SubmitBtnContainer = styled.div`
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
const placeholder = {
  opacity: '0.5',
  fontStyle: 'italic',
};
const inputStyle = {
  padding: '10px 15px',
  backGround: 'transparent',
  width: '100%',
  fontSize: '14px',
  InputContainer: {
    width: '75%',
    height: '36px',
    margin: '0 0 0 auto',
  },
  placeholder: {
    ...placeholder,
  },
};
const inputStyle2 = {
  ...inputStyle,
  width: '70%',
};

const textButtonStyle = {
  position: 'absolute',
  right: '5px',
  top: '8px',
  color: '#808080',
  fontSize: '15px',
  fontWeight: 'bold',
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
  H1,
  inputStyle,
  textButtonStyle,
  inputStyle2,
  Ul,
  Li,
  normalButtonStyle,
  textButtonStyle3,
  BackLogin,
  SubmitBtnContainer,
};
