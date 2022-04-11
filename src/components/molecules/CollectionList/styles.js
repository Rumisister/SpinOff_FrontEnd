import styled from 'styled-components';
import { ReactComponent as list } from '../../../assets/images/downMore.svg';

const Container = styled.div`
  position: relative;
  color: black;
  font-weight: bold;
  font-size: 16px;
  width: 90px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  user-select: none;
`;

const ListIcon = styled(list)`
  margin-bottom: 3px;
  margin-left: 5px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;

export { Container, ListIcon };
