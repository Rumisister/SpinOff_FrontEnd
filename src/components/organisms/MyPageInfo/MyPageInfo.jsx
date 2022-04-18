import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { axios } from '../../../api';
import { MyPageInfoAbout, MyPageInfoPoster } from '../../molecules';
import { Container, InfoContainer } from './styles';

function MyPageInfo({ member_id }) {
  const [info, setInfo] = useState({});
  console.log(member_id + '******************');
  console.log(info, setInfo);
  useEffect(() => {
    let componentMounted = true;
    const requestMyPageInfo = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: `/api/member/${member_id}`,
        });
        console.log(res);

        if (componentMounted) {
          setInfo({ ...res.data.data });
        }
      } catch (error) {
        console.log(error);
      }
    };
    requestMyPageInfo();

    return () => {
      componentMounted = false;
    };
  }, []);
  return (
    <Container>
      <InfoContainer>
        <MyPageInfoPoster profileUrl={info.profileUrl} />
        <MyPageInfoAbout info={info} />
      </InfoContainer>
    </Container>
  );
}
MyPageInfo.propTypes = {
  member_id: propTypes.number,
};
export default MyPageInfo;
