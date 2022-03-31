import styled from 'styled-components';
import { ReactComponent as insert } from '../../../assets/images/insertPoster.svg';

const Container = styled.div`
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
const InsertPosterContainer = styled.div`
  position: relative;
  display: flex;
  padding-top: 20px;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
`;

const InsertIconContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 100%;
  background: #c4c4c4;
  cursor: pointer;
  margin-right: 40px;
`;
const InsertIcon = styled(insert)``;

export { Container, InsertPosterContainer, InsertIconContainer, InsertIcon };
