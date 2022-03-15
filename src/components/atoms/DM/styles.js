import styled from 'styled-components';
import { ReactComponent as Message } from '../../../assets/images/message.svg';

const Icon = styled(Message)`
  padding: 20px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  fill: white;
  transition: 0.3s;
  &:hover {
    width: 40px;
    height: 40px;
    fill: #f9cf00;
    transition: 0.3s;
  }
`;

export default Icon;
