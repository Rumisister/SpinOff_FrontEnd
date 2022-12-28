import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { NormalButton, TextButton } from '../../atoms';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  ModifyProfile,
  PosterContainer,
  profileModify,
  follow,
  following,
} from './styles';
import { useSelector } from 'react-redux';

function MyPageInfoPoster({ info }) {
  console.log('info', info);
  const history = useNavigate();
  const loginId = useSelector(state => state.authReducer.member_id);
  const registProfileOrFollowInfo = useMemo(() => {
    return info.id === loginId
      ? '프로필 수정'
      : info.followed
      ? '팔로잉'
      : '팔로우';
  }, [info, loginId]);

  const goToModifyProfile = () => {
    history(`/ModifyMyProfile`);
  };

  return (
    <Container>
      <PosterContainer profileUrl={info.profileUrl}></PosterContainer>
      <ModifyProfile>
        {registProfileOrFollowInfo === '팔로우' ? (
          <NormalButton Style={follow}>
            {registProfileOrFollowInfo}
          </NormalButton>
        ) : (
          <TextButton
            onClick={goToModifyProfile}
            Style={
              registProfileOrFollowInfo === '팔로잉' ? following : profileModify
            }
          >
            {registProfileOrFollowInfo}
          </TextButton>
        )}
      </ModifyProfile>
    </Container>
  );
}
MyPageInfoPoster.propTypes = {
  info: propTypes.object,
};

export default React.memo(MyPageInfoPoster);
