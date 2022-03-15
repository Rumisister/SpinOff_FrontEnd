import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 15% 0 0 0;
`;
const InputListContainer = styled.div`
  width: 80%;
  margin: 0 30px;
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  position: relative;
  border: 1px solid #f24860;
  width: 100%;
  height: 50px;
  margin: 5px auto;
  border-radius: 50px;
  box-sizing: border-box;
`;
const PlaceHolder = styled.span`
  position: absolute;
  top: 15px;
  left: 20px;
  font-weight: bold;
  color: gray;
  opacity: 0.8;
  transition: 0.3s;
  user-select: none;
  transform: ${props => (props?.value ? 'translate(0,-10px)' : '')};
  font-size: ${props => (props?.value ? '14px' : '')};
`;

const inputStyle = {
  padding: '20px 20px 10px 20px',
  backGround: 'transparent',
  width: '100%',
  fontSize: '16px',
  focused: {
    transform: 'translate(0,-10px)',
    fontSize: '14px',
  },
};
const normalButtonStyle = {
  position: 'absolute',
  bottom: '15px',
  fontSize: '20px',
  background: '#F9CF00',
  fontWeight: 'bold',
  width: '80%',
  height: '50px',
  margin: 'auto 30px auto 30px',
  borderRadius: '30px',
};
export {
  Container,
  InputListContainer,
  InputContainer,
  inputStyle,
  normalButtonStyle,
  PlaceHolder,
};
