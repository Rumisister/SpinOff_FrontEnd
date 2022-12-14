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
  width: 12.5rem;
  height: 12.5rem;
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

const profileModify = {
  color: '#F9CF00',
  textDecoration: 'underline',
  backgroundColor: '#F24860',
};

const follow = {
  color: 'white',
  background: '#F24860',
  borderRadius: '3.125rem',
  width: '6.5rem',
  height: '3.125rem',
  fontSize: '1.5625rem',
  fontWeight: 'bold',
};
const following = {
  color: '#FFFFFF',
  backgroundColor: '#F24860',
  borderRadius: '3.125rem',
  width: '6.25rem',
  height: '2.5rem',
};

export {
  Container,
  PosterContainer,
  ModifyProfile,
  profileModify,
  follow,
  following,
};
