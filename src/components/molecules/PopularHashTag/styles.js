import styled from 'styled-components';
import { ReactComponent as hashTag } from '../../../assets/images/hashTag.svg';
import img from '../../../assets/images/tag.png';

const Container = styled.div`
  margin: 20px 0 20px 0;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const TagBox = styled.div`
  cursor: pointer;
  width: 144px;
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-top: 10px;
  background: url(${img}) no-repeat;
  background-size: cover;
`;
const HashTag = styled(hashTag)`
  display: none;
  width: 144px;
  height: 64px;
  top: 0;
  left: 0;
  z-index: -1;
`;
const TagText = styled.div`
  color: #292929;
  font-size: 16px;
  font-weight: bold;
  margin: 0 25px 0 10px;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px 0;
`;

export { Container, Title, Contents, HashTag, TagBox, TagText };
