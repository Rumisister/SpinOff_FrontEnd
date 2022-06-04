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
  top: 122px;
  height: 56px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.25);
`;

const SearchHistory = styled.div``;
const PopHashTag = styled.div``;
const CuratedMovie = styled.div``;

const inputStyle = {
  width: '85%',
  padding: '13px 15px',
  backGround: 'transparent',
};
export {
  Magnifier,
  SearchBarContainer,
  SearchHistory,
  PopHashTag,
  CuratedMovie,
  inputStyle,
};
