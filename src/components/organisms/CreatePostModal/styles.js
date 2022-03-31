import styled from 'styled-components';
import { ReactComponent as xmark } from '../../../assets/images/xmark.svg';
import { ReactComponent as create } from '../../../assets/images/create.svg';

const Modal = styled.div`
  position: fixed;
  visibility: ${props => (props?.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props?.isOpen ? '1' : '0')};
  transition: 0.3s;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1000px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const Container = styled.div`
  position: fixed;
  display: flex;
  top: 120px;
  width: 54%;
  min-width: 540px;
  left: max(23%, 230px);
  height: 580px;
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  user-select: none;
`;

const LeftContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  z-index: -1;
  padding: 20px 10px 20px 20px;
  box-sizing: border-box;
`;

const RightContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Xmark = styled(xmark)`
  fill: white;
  position: absolute;
  cursor: pointer;
  width: 30px;
  height: 30px;
  top: 100px;
  right: 15%;
`;

const CreatePost = styled(create)`
  width: 60px;
  height: 60px;
  cursor: pointer;
  &:hover {
    fill: blue;
  }
`;

const NormalButtonStyle = {
  position: 'absolute',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'white',
  borderBottomLeftRadius: '3px',
  borderTopLeftRadius: '3px',
  background: '#F24860',
  width: '120px',
  height: '30px',
  left: '-110px',
  top: '30px',
  textAlign: 'start',
};

const NormalButtonStyle2 = {
  position: 'absolute',
  borderBottomRightRadius: '3px',
  borderTopRightRadius: '3px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'white',
  background: '#F24860',
  bottom: '30px',
  width: '80px',
  right: '-80px',
  height: '30px',
  textAlign: 'center',
};
export {
  Container,
  CreatePost,
  LeftContainer,
  Modal,
  Xmark,
  NormalButtonStyle,
  NormalButtonStyle2,
  RightContainer,
};
