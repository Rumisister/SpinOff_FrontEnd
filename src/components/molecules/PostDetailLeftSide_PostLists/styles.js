import styled from 'styled-components';
import { ReactComponent as leftScroll } from '../../../assets/images/leftScroll_gray.svg';
import { ReactComponent as rightScroll } from '../../../assets/images/rightScroll_gray.svg';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 82%;
  overflow: hidden;
  border-top-left-radius: 1.25rem;
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
  top: calc(50% - 0.9375rem);
  left: 0.625rem;
  width: 1.875rem;
  height: 1.875rem;
  cursor: pointer;
`;
const RightScroll = styled(rightScroll)`
  position: absolute;
  top: calc(50% - 0.9375rem);
  right: 0.625rem;
  width: 1.875rem;
  height: 1.875rem;
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
  bottom: 0.625rem;
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
  width: 0.625rem;
  height: 0.625rem;
  margin: 0 0.625rem;
  border-radius: 50%;
  background: ${props => (props?.selected ? 'white' : '#F24860')};
  box-shadow: ${props =>
    props?.selected ? '.125rem .125rem .25rem rgba(0, 0, 0, 0.5)' : ''};
  cursor: pointer;
`;

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '0',
  textIndent: '-624.9375rem',
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
