import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 200px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 17px;
`;
const CuratorContainer = styled.div`
  border: 1px solid #f9cf00;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  margin-left: 10px;
`;
const NickContainer = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
const MailContainer = styled.div`
  color: #f9cf00;
  font-size: 13px;
`;
const posterStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '30px',
};
export {
  Container,
  Title,
  CuratorContainer,
  ImgContainer,
  posterStyle,
  InfoContainer,
  NickContainer,
  MailContainer,
};
