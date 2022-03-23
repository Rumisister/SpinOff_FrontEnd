import styled from 'styled-components';

const Container = styled.div`
  margin-top: auto;
  width: 100%;
  user-select: none;
`;

const CheckBoxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 30px;
  font-size: 12px;
`;

const CheckBox = styled.label`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 20px;
  border: 1px solid #f24860;
  background: ${props => (props?.checked ? '#f24860' : '')};
  margin-right: 5px;
  cursor: pointer;
`;

const InputListContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 30px;
`;

const Explain = styled.div`
  display: ${props => (props?.Error || props?.Explain ? 'flex' : 'none')};
  color: ${props => (props?.Error ? '#f24860;' : '#808080')};
  margin: -8px 30px 15px 30px;
`;
const Explanation = styled.div`
  width: 70%;
  margin: 0 0 0 auto;
  font-size: 12px;
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
  color: '#F24860',
  fontSize: '13px',
  fontWeight: 'bold',
};
const textButtonStyle2 = {
  position: 'absolute',
  right: '5px',
  color: '#F24860',
  fontSize: '12px',
  fontWeight: 'bold',
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
  InputListContainer,
  InputContainer,
  Span,
  inputStyle,
  inputStyle2,
  normalButtonStyle,
  Explanation,
  Explain,
  CheckBox,
  CheckBoxContainer,
  textButtonStyle,
  textButtonStyle2,
};
