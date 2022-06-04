import styled from 'styled-components';
import { ReactComponent as more } from '../../../assets/images/downMore.svg';
const Container = styled.div`
  position: relative;
  width: 20%;
  min-width: 120px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  user-select: none;
`;
const TypeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  border: 3px solid #f24860;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  z-index: 2;
`;
const DropDownMenuContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 28px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: rgba(0, 0, 0, 0.9);
  padding-top: 30px;
  z-index: 0;
`;
const DropDownMenu = styled.div`
  position: relative;
  width: 100%;
  color: ${props => (props.selected ? '#F9CF00' : 'white')};
  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
  padding: 10px 10px;
  cursor: pointer;
`;
const Icon = styled(more)`
  position: absolute;
  right: 5px;
  top: 18px;
  cursor: pointer;
  width: 12px;
  height: 12px;
`;
export { Container, TypeContainer, DropDownMenuContainer, DropDownMenu, Icon };
