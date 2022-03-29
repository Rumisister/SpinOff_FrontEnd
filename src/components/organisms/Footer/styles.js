import styled from 'styled-components';
import { ReactComponent as create } from '../../../assets/images/create.svg';
import { ReactComponent as help } from '../../../assets/images/help.svg';

const Container = styled.div`
  position: fixed;
  right: 30px;
  bottom: 50px;
  background: transparent;
  z-index: 1;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
const CreatePost = styled(create)`
  width: 60px;
  height: 60px;
  cursor: pointer;
  &:hover {
    fill: blue;
  }
`;
const Help = styled(help)`
  padding-right: 5px;
  width: 70px;
  height: 60px;
  cursor: pointer;
  &:hover {
    fill: blue;
  }
`;

export { Container, CreatePost, Help, IconContainer };
