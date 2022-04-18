import React from 'react';
import { useLocation } from 'react-router-dom';
import { MyPageInfo } from '../../components/organisms';

function MyPage() {
  console.log('마이페이지');
  return (
    <>
      <MyPageInfo member_id={useLocation().state.member_id} />
    </>
  );
}

export default MyPage;
