import styled from 'styled-components';
import { ReactComponent as Icon } from '../../../assets/images/magnifier.svg';

const Magnifier = styled(Icon)`
  padding: 10px;
  margin-left: 5px;
  cursor: pointer;
`;
const Common = styled.div`
  position: fixed;
  left: max(50%, 500px);
  width: 50%;
  min-width: 500px;
  margin-left: min(-25%, -250px);
`;

const SearchBarContainer = styled(Common)`
  display: flex;
  align-items: center;
  top: 120px;
  height: 56px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.25);
`;

const SearchBarModal = styled(Common)`
  //display: ${props => (props.focused ? '' : 'none')};
  visibility: ${props => (props?.focused ? 'visible' : 'hidden')};
  opacity: ${props => (props?.focused ? '1' : '0')};
  transition: 0.3s;
  top: 148px;
  max-height: 580px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: rgba(32, 32, 32, 0.9);
  overflow: scroll;
`;
const Contents = styled.div`
  padding: 30px;
  user-select: none;
`;
const SearchHistory = styled.div``;
const PopHashTag = styled.div``;
const CuratedMovie = styled.div``;
export {
  Magnifier,
  SearchBarContainer,
  SearchBarModal,
  Contents,
  SearchHistory,
  PopHashTag,
  CuratedMovie,
};
