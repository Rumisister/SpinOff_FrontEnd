import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyPageCuration, MyPageInfo } from '../../components/organisms';
import { Container } from './styles';

function MyPage() {
  console.log('마이페이지');
  const myId = useSelector(state => state.authReducer.member_id);
  const history = useNavigate();
  const member_info = useLocation().state;
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const ref = useRef({ rootRef, targetRef });
  if (member_info.isMe && member_info.member_id !== myId) history('/');
  return (
    <Container ref={rootRef}>
      <MyPageInfo member_id={member_info.member_id} />
      <MyPageCuration member_id={member_info.member_id} ref={ref} />
      <div ref={targetRef} />
    </Container>
  );
}

export default MyPage;
