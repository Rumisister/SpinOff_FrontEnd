import styled from 'styled-components';
import baseProfile from '../../../assets/images/baseProfile.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  height: 55%;
`;

const PosterContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  background-image: url(${props => props?.profileUrl || baseProfile});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ModifyProfile = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const textButtonStyle = {
  color: '#F9CF00',
  textDecoration: 'underline',
};

export { Container, PosterContainer, ModifyProfile, textButtonStyle };
