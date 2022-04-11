import styled from 'styled-components';
import { ReactComponent as collection } from '../../../assets/images/collection.svg';
import { ReactComponent as complete } from '../../../assets/images/complete.svg';

const Container = styled.div`
  //display: ${props => (props?.isOpened ? '' : 'none')};
  //visibility: ${props => (props.isOpened ? 'visible' : 'hidden')};
  //opacity: ${props => (props.isOpened ? '0.9' : '0')};
  transition: 0.3s;
  position: absolute;
  width: 330px;
  height: 400px;
  left: -120px;
  top: 35px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 25px;
  z-index: 1;
`;

const TopContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 10px;
  width: 290px;
  height: 15%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
const CollectionLogo = styled(collection)`
  width: 60%;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 70%;
  margin: 0 auto;
  padding-top: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #f9cf00;
`;

const BottomContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 290px;
  height: 15%;
  align-items: center;
  justify-content: flex-end;
`;

const Complete = styled(complete)`
  width: 50px;
  cursor: pointer;
`;

const inputStyle2 = {
  fontSize: '16px',
  padding: '10px 0',
  width: '100%',
  height: '100%',
  backGround: 'transparent',
  placeholder: {
    color: 'rgba(17, 17, 17, 0.5)',
  },
};

const inputStyle = {
  fontSize: '20px',
  padding: '5px 0',
  width: '100%',
  backGround: 'transparent',
  placeholder: {
    color: 'rgba(17, 17, 17, 0.5)',
    fontWeight: 'bold',
  },
};
export {
  Container,
  TopContainer,
  CollectionLogo,
  MiddleContainer,
  BottomContainer,
  Complete,
  inputStyle,
  inputStyle2,
};
