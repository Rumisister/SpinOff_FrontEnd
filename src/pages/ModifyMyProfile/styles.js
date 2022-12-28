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
  width: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 60px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PosterContainer = styled.div`
  width: 14.5rem;
  height: 14.5rem;
  border-radius: 50%;
  background-color: tomato;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileTop = styled.div`
  display: flex;
  flex-direction: row;
  /* border: solid 1px orange; */
  justify-content: space-between;
  align-items: center;
`;

const ProfileBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  /* border: solid 1px pink; */
`;

const TitleContainer = styled.div`
  /* border: solid 1px blue; */
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: ${props => (props?.Box ? 'column' : 'row')};
  justify-content: space-between;
  align-items: ${props => (props?.Box ? 'flex-start' : 'center')};
  margin-bottom: 25px;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: 'SUIT';
  font-weight: 700;
  margin-bottom: ${props => (props?.bottom ? '10px' : '0')};
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

const InputBox2 = styled.textarea`
  border-color: rgb(249, 207, 0);
  width: 800px;
  height: 130px;
  border-radius: 25px;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 20px;
  vertical-align: top;
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
  ProfileTop,
  ProfileBottom,
  InputBox2,
};
