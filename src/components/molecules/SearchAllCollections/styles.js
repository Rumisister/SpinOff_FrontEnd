import styled from 'styled-components';
import { ReactComponent as rightScroll } from '../../../assets/images/rightScroll.svg';
import { ReactComponent as leftScroll } from '../../../assets/images/leftScroll.svg';

const Wrapper = styled.div`
  position: relative;
`;
const Container = styled.div`
  position: relative;
  height: 280px;
  width: calc(100% - 120px);
  overflow: hidden;
  margin: 0 auto;
`;
const LeftScroll = styled(leftScroll)`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 0px;
  z-index: 1;
  cursor: pointer;
`;
const RightScroll = styled(rightScroll)`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  right: 0px;
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
  posterStyle,
  Container,
  PosterList,
  LeftScroll,
  RightScroll,
  Wrapper,
};
