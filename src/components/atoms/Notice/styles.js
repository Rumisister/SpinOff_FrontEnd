import styled from 'styled-components';
import { ReactComponent as Notice } from '../../../assets/images/notice.svg';

const Icon = styled(Notice)`
  padding: 20px;
  cursor: pointer;
  fill: white;
  width: 35px;
  height: 35px;
  transition: 0.3s;
  &:hover {
    width: 40px;
    height: 40px;
    fill: #f9cf00;
    transition: 0.3s;
  }
`;
export default Icon;
