import styled from 'styled-components';
import { ReactComponent as external } from '../../../assets/images/external.svg';
import { ReactComponent as more } from '../../../assets/images/more.svg';

const PostContainer = styled.figure`
  display: inline-block;
  position: absolute;
  background: transparent;
  //border: 1px solid rgba(0, 0, 0, 0.2);
  width: 200px;
  margin: 0;
  margin-bottom: 20px;
  border-radius: 30px;
  box-shadow: rgba(50, 50, 93, 0.25);
`;

const PostCaption = styled.figcaption`
  font-weight: bold;
  margin-top: 10px;
  font-size: 14px;
`;
const SubCaption = styled.figcaption`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
`;
const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
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
  background: rgba(39, 35, 32, 0.6);
  border-radius: 30px;
  transition: 0.4s;
  opacity: 0;
`;

const External = styled(external)`
  position: absolute;
  bottom: 10px;
  right: 40px;
  background: white;
  border-radius: 20px;
  padding: 5px;
`;
const More = styled(more)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: white;
  border-radius: 20px;
  padding: 5px;
`;

const buttonStyle = {
  position: 'absolute',
  right: '10px',
  top: '10px',
  background: 'white',
  color: '#F24860',
  fontWeight: 'bold',
  borderRadius: '20px',
  padding: '8px 13px',
  fontSize: '17px',
};

const posterStyle = {
  borderRadius: '30px',
  border: '0',
  height: 'auto',
  minHeight: '150px',
  maxWidth: '100%',
};
const posterStyle2 = {
  width: '25px',
  height: '25px',
  borderRadius: '30px',
  margin: '0 5px 0 0',
};
const posterStyle3 = {
  width: '20px',
  height: '20px',
  margin: '0 5px 0 0',
};
export {
  PostContainer,
  PostCaption,
  posterStyle,
  ImageContainer,
  ImageHover,
  External,
  More,
  buttonStyle,
  SubCaption,
  posterStyle2,
  posterStyle3,
};
