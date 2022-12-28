import styled from 'styled-components';

const Container = styled.div`
  height: calc(100% - 149px);
  margin-top: 149px;
  display: flex;
  flex-direction: row;
  width: '100%';
`;

const ContainerLeft = styled.div`
  border: solid 1px gray;
  width: 250px;
  /* justify-content: center;
  align-items: center; */
`;

const TextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 50px;
  align-items: flex-start;
`;

const ModifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(249, 207, 0);
  margin-top: 30px;
  font-size: 30px;
  border: none;
  font-family: 'SUIT';
`;

const ContainerRight = styled.div`
  /* background-color: yellowgreen; */
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 100px;
  /* flex-direction: column; */
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PosterContainer = styled.div`
  /* position: absolute;
  top: 250px;
  left: 350px; */
  width: 13.5rem;
  height: 13.5rem;
  /* margin: 0 auto; */
  border-radius: 50%;
  background-color: tomato;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleContainer = styled.div``;

const TitleBox = styled.div`
  /* width: 300px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  /* margin-left: 100px; */
`;

const Title = styled.div`
  font-size: 20px;
  font-family: 'SUIT';
`;

const InputBox = styled.input`
  border-color: rgb(249, 207, 0);
  width: 500px;
  height: 50px;
  border-radius: 40px;
  font-size: 20px;
  padding-left: 15px;
  margin-left: 30px;
`;

const textButtonStyle = {
  fontSize: '20px',
  fontFamily: 'SUIT',
  color: 'rgb(249, 207, 0)',
  margin: '20px',
};

export {
  ContainerLeft,
  textButtonStyle,
  ModifyButton,
  ContainerRight,
  Container,
  Title,
  InputBox,
  TitleBox,
  PosterContainer,
  ProfileContainer,
  TitleContainer,
  TextButtonContainer,
};
