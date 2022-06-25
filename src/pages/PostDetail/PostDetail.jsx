import React, { useEffect } from 'react';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import { axios } from '../../api';

function PostDetail() {
  const postId = new URLSearchParams(useLocation().search).get('post_id');
  useEffect(() => {
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
      } catch (error) {
        console.log(error);
      }
    };
    requestDetail();
  }, []);

  return <div></div>;
}

export default PostDetail;
