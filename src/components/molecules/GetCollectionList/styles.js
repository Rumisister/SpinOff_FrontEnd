import styled from 'styled-components';
import { ReactComponent as add } from '../../../assets/images/addCollection.svg';
import { ReactComponent as magnifier } from '../../../assets/images/magnifier.svg';

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

const SearchContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 290px;
  height: 15%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #f24860;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5px;
  width: 15%;
`;
const Magnifier = styled(magnifier)`
  width: 25px;
  height: 25px;
`;
const InputContainer = styled.div`
  width: 85%;
`;
const AddCollectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;
const AddCollectionButton = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const CollectionLists = styled.div`
  width: 100%;
  height: 70%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: rgba(32, 32, 32, 0.9);
    background-clip: padding-box;
    border: 2px solid transparent;
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }
`;

const AddIcon = styled(add)`
  margin-right: 10px;
`;
const inputStyle = {
  width: '100%',
  padding: '20px 0 10px 0',
  backGround: 'transparent',
  fontSize: '16px',
  placeholder: {
    opacity: '1',
    color: '#f24860',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
};

export {
  AddCollectionButton,
  AddCollectionContainer,
  AddIcon,
  CollectionLists,
  Container,
  IconContainer,
  InputContainer,
  Magnifier,
  SearchContainer,
  inputStyle,
};
