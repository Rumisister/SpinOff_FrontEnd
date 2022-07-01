import styled from 'styled-components';
import { ReactComponent as leftScroll } from '../../../assets/images/leftScroll_gray.svg';
import { ReactComponent as rightScroll } from '../../../assets/images/rightScroll_gray.svg';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 82%;
  overflow: hidden;
  border-top-left-radius: 20px;
`;

const PosterListContainer = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  left: ${props => `${props?.moveCount * props?.imageWidth}px`};
  transition: 0.3s;
  top: 0;
`;

const LeftScroll = styled(leftScroll)`
  position: absolute;
  top: calc(50% - 15px);
  left: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const RightScroll = styled(rightScroll)`
  position: absolute;
  top: calc(50% - 15px);
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: ${props => `${props?.imageWidth}px`};
  height: 100%;
  vertical-align: middle;
  line-height: 100%;
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Indicator = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 10px;
  border-radius: 50%;
  background: ${props => (props?.selected ? 'white' : '#F24860')};
  box-shadow: ${props =>
    props?.selected ? '2px 2px 4px rgba(0, 0, 0, 0.5)' : ''};
  cursor: pointer;
`;

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '0',
  textIndent: '-9999px',
};
export {
  Container,
  PosterListContainer,
  LeftScroll,
  RightScroll,
  ImageContainer,
  imageStyle,
  Indicator,
  Dot,
  IndicatorContainer,
};
