import styled from 'styled-components';

const Container = styled.div`
  position: ${props =>
    props?.type === 'collection' ? 'absolute' : 'relative'};
  width: ${props => (props?.type === 'all' ? '300px' : '400px')};
  margin-right: ${props => (props?.type === 'all' ? '30px' : '')};
  height: 280px;
  border-radius: 25px;
  overflow: hidden;
  user-select: none;
  border: 1px solid #bc32ea;
  cursor: pointer;
`;

const CollectionInfoContainer = styled.div`
  position: absolute;
  background: rgba(17, 17, 17, 0.8);
  width: 100%;
  height: 35%;
  border-radius: 0px 0px 25px 25px;
  backdrop-filter: blur(4px);
  bottom: 0;
  left: 0;
  border: 1px solid #bc32ea;
  display: flex;
  align-items: center;
`;
const CollectionInfo = styled.div`
  margin-left: 20px;
  flex: 1;
`;
const CollectionInfoFollowing = styled.div`
  width: 100%;
  color: #f9cf00;
  font-weight: bold;
  font-size: 14px;
`;
const CollectionInfoName = styled.div`
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;
const CollectionInfoMember = styled.div`
  width: 100%;
  color: white;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
`;

const posterStyle = {
  height: '100%',
  filter: 'drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25))',
  objectFit: 'cover',
  textIndent: ' -9999px',
};
const normalButtonStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  background: '#bc32ea',
  color: 'white',
  borderRadius: '30px',
  padding: '10px 15px',
};
export {
  Container,
  CollectionInfoContainer,
  posterStyle,
  CollectionInfo,
  CollectionInfoFollowing,
  CollectionInfoMember,
  CollectionInfoName,
  ButtonContainer,
  normalButtonStyle,
};
