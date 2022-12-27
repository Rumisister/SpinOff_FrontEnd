import styled from 'styled-components';

const Container = styled.div`
  height: calc(100% - 149px);
  margin-top: 149px;
  display: flex;
  flex-direction: row;
`;

const ContainerLeft = styled.div`
  background-color: aliceblue;
  width: 315px;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;

const ProfileHeader = styled.button`
  font-size: 30px;
  margin-top: '40%';
  color: '#f9cf00';
  width: 317px;
`;

const OffModifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(249, 207, 0, 1);
  margin-top: 30px;
  font-size: 30px;
  border: none;
  font-family: 'SUIT';
`;

const ContainerRight = styled.div`
  background-color: yellowgreen;
  width: 1288px;
`;

const TitleBox = styled.div`
  width: 760px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 25px;
  font-family: 'SUIT';
`;

const InputBox = styled.input`
  border-color: rgba(249, 207, 0, 1);
  width: 620px;
  height: 50px;
  border-radius: 40px;
  font-size: 25px;
  padding-left: 15px;
`;

export {
  ContainerLeft,
  ProfileHeader,
  OffModifyButton,
  ContainerRight,
  Container,
  Title,
  InputBox,
  TitleBox,
};
