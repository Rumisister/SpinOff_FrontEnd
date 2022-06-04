import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 280px;
  border-radius: 25px;
  overflow: hidden;
  user-select: none;
  border: 1px solid #f24860;
  cursor: pointer;
`;

const CuratorInfoContainer = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 35%;
  border-radius: 0px 0px 25px 25px;
  backdrop-filter: blur(4px);
  bottom: 0;
  left: 0;
  border: 1px solid #f24860;
  display: flex;
  align-items: center;
`;
const CuratorInfo = styled.div`
  margin-left: 20px;
  flex: 1;
`;
const CuratorInfoFollowing = styled.div`
  width: 100%;
  color: #f24860;
  font-weight: bold;
  font-size: 14px;
`;
const CuratorInfoName = styled.div`
  width: 100%;
  color: white;
  font-size: 14px;
  color: #6c6767;
`;
const CuratorInfoMember = styled.div`
  width: 100%;
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileContainer = styled.div`
  position: absolute;
  top: -30px;
`;
const posterStyle = {
  height: '100%',
  filter: 'drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25))',
  objectFit: 'cover',
  textIndent: ' -9999px',
};
const posterStyle2 = {
  width: '50px',
  height: '50px',
  objectFit: 'cover',
  textIndent: ' -9999px',
  border: '5px solid #F24860',
  borderRadius: '30px',
};
const normalButtonStyle = {
  height: '30px',
  fontSize: '16px',
  fontWeight: 'bold',
  background: '#F24860',
  color: 'white',
  borderRadius: '30px',
  padding: '5px 15px',
};
export {
  Container,
  CuratorInfoContainer,
  posterStyle,
  CuratorInfo,
  CuratorInfoFollowing,
  CuratorInfoMember,
  CuratorInfoName,
  ButtonContainer,
  ProfileContainer,
  normalButtonStyle,
  posterStyle2,
};
