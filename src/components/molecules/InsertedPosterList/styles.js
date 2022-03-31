import styled from 'styled-components';
import { ReactComponent as rightScroll } from '../../../assets/images/rightScroll.svg';
import { ReactComponent as leftScroll } from '../../../assets/images/leftScroll.svg';
import { ReactComponent as del } from '../../../assets/images/delete.svg';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 110px);
  overflow: hidden;
`;
const LeftScroll = styled(leftScroll)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 100px;
  z-index: 1;
  cursor: pointer;
`;
const RightScroll = styled(rightScroll)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: -10px;
  z-index: 1;
  cursor: pointer;
`;
const PosterList = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  left: ${props => (props?.moveRight ? `${props?.moveRight}px` : '0')};
  transition: 0.3s;
  top: 0;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 70px;
  cursor: pointer;
  height: 100%;
  margin-right: 5px;
  vertical-align: middle;
  line-height: 100%;
  &:hover div {
    visibility: visible;
    opacity: 1;
    transition: 0.4s;
  }
`;

const ImageHover = styled.div`
  position: absolute;
  visibility: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.34);
  transition: 0.4s;
  opacity: 0;
`;

const DeleteIcon = styled(del)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const posterStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '0',
  textIndent: '-9999px',
};

const NormalButtonStyle = {
  position: 'absolute',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'white',
  borderBottomLeftRadius: '3px',
  borderTopLeftRadius: '3px',
  background: '#F24860',
  width: '120px',
  height: '30px',
  left: '-110px',
  top: '30px',
  textAlign: 'start',
};

const NormalButtonStyle2 = {
  position: 'absolute',
  borderBottomRightRadius: '3px',
  borderTopRightRadius: '3px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'white',
  background: '#F24860',
  bottom: '30px',
  width: '80px',
  right: '-80px',
  height: '30px',
  textAlign: 'center',
};
export {
  NormalButtonStyle,
  NormalButtonStyle2,
  ImageContainer,
  posterStyle,
  Container,
  PosterList,
  LeftScroll,
  RightScroll,
  ImageHover,
  DeleteIcon,
};
