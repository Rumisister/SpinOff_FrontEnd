import styled from 'styled-components';
import { ReactComponent as Profile } from '../../../assets/images/profile.svg';

const Icon = styled(Profile)`
  cursor: pointer;
  padding: 20px;
  width: 35px;
  height: 35px;
  margin-right: 30px;
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
