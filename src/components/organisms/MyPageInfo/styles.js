import styled from 'styled-components';
import myPage from '../../../assets/images/myPage.png';

const Container = styled.div`
  display: flex;
  width: 100%;
  min-width: 1000px;
  height: 500px;
  //margin-left: -1px;
  background: url(${myPage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 149px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 60%;
  height: calc(100% - 28px);
  margin: 28px auto 0 auto;
  align-items: center;
`;
export { Container, InfoContainer };
