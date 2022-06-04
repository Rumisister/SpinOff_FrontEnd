import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 120px);
  margin: 0 auto;
  height: 350px;
  display: flex;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  overflow-x: auto;
  overflow-y: hidden;
`;
const MainMoiveContainer = styled.div`
  position: relative;
  width: ${props => (props?.width ? `${props.width}px` : 'auto')};
  height: 100%;
  &:hover div {
    visibility: visible;
    opacity: 1;
    transition: 0.4s;
  }
`;
const MainContainerHover = styled.div`
  position: absolute;
  visibility: hidden;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: inherit;
  height: 100%;
  background: rgba(39, 35, 32, 0.6);
  border-radius: 30px;
  transition: 0.4s;
  opacity: 0;
  z-index: 2;
`;
const ImgContainer = styled.div`
  position: absolute;
  left: ${props => (props?.left ? `${props.left}px` : 0)};
  z-index: ${props => props?.zIndex || 0};
  height: 100%;
  filter: ${props => (props?.side ? 'brightness(60%)' : 'auto')};
`;
const MovieTitle = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
const buttonStyle = {
  position: 'absolute',
  right: '20px',
  top: '20px',
  background: 'white',
  color: '#F24860',
  fontWeight: 'bold',
  borderRadius: '20px',
  padding: '8px 13px',
  fontSize: '17px',
  hover: {
    background: '#2800EE',
  },
};
const buttonStyle2 = {
  position: 'absolute',
  right: '20px',
  bottom: '20px',
  background: '#F24860',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '20px',
  padding: '8px 13px',
  fontSize: '17px',
};
const posterStyle = {
  width: '230px',
  height: '100%',
  objectFit: 'cover',
  textIndent: ' -9999px',
  borderRadius: '30px',
};

export {
  Container,
  ImgContainer,
  posterStyle,
  MainMoiveContainer,
  MainContainerHover,
  MovieTitle,
  buttonStyle,
  buttonStyle2,
};
