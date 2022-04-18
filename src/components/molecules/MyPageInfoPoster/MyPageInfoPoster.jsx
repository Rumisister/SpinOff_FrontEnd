import React from 'react';
import propTypes from 'prop-types';
import { TextButton } from '../../atoms';
import {
  Container,
  ModifyProfile,
  PosterContainer,
  textButtonStyle,
} from './styles';

function MyPageInfoPoster({ profileUrl }) {
  return (
    <Container>
      <PosterContainer profileUrl={profileUrl}></PosterContainer>
      <ModifyProfile>
        <TextButton Style={textButtonStyle}>프로필 수정</TextButton>
      </ModifyProfile>
    </Container>
  );
}
MyPageInfoPoster.propTypes = {
  profileUrl: propTypes.string,
};

export default React.memo(MyPageInfoPoster);
