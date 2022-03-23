import styled from 'styled-components';
import { ReactComponent as planet } from '../../../assets/images/fullPlanet.svg';

const SuccessSignUpContainer = styled.div`
  position: relative;
  width: 100%;
  background: black;
  border-radius: 20px;
  border: 1px solid gray;
  user-select: none;
`;

const Planet = styled(planet)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props?.Style?.color || ''};
  font-size: ${props => props?.Style?.fontSize || ''};
  font-weight: ${props => props?.Style?.fontWeight || ''};
  margin: ${props => props?.Style?.margin || ''};
  width: ${props => props?.Style?.width || ''};
`;

const MessageStyle1 = {
  color: '#BC32EA',
  fontSize: '17px',
  margin: '20% 0 0 0',
};

const MessageStyle2 = {
  color: '#FFFFFF',
  fontSize: '30px',
  margin: '30px auto',
  fontWeight: 'bold',
  width: '350px',
};
const TextButtonStyle = {
  ...MessageStyle1,
  margin: '0',
  textDecoration: 'underline',
  fontWeight: 'bold',
};
const NormalButtonStyle = {
  background: '#BC32EA',
  borderRadius: '20px',
  width: '350px',
  height: '30px',
  margin: '0 auto',
  color: 'white',
  fontWeight: 'bold',
};
export {
  SuccessSignUpContainer,
  Planet,
  Message,
  MessageStyle1,
  MessageStyle2,
  NormalButtonStyle,
  TextButtonStyle,
};
