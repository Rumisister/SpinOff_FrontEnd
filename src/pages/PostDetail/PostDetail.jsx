import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import { axios } from '../../api';
import { Container } from './style';
import { PostDetailAboutPost } from '../../components/organisms';

function PostDetail() {
  const postId = new URLSearchParams(useLocation().search).get('post_id');
  const [postData, setPostData] = useState({});
  useEffect(() => {
    let componentMounted = true;
    const requestIP = async () => {
      try {
        const res = await Axios({
          method: 'get',
          url: 'https://api.ipify.org?format=json',
        });
        console.log(res.data.ip);
        return res.data.ip;
      } catch (error) {
        console.log(error);
      }
    };
    const requestDetail = async () => {
      try {
        const ipAdress = await requestIP();
        const res = await axios({
          method: 'get',
          url: `/api/post/${postId}`,
          data: null,
          params: {
            ip: ipAdress,
          },
        });
        console.log(res);
        if (componentMounted) setPostData({ ...res.data.data });
      } catch (error) {
        console.log(error);
      }
    };
    requestDetail();

    return () => {
      componentMounted = false;
    };
  }, []);

  return (
    <Container>
      <PostDetailAboutPost contents={postData} />
    </Container>
  );
}

export default PostDetail;
