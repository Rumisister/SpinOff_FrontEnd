import React, { useLayoutEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { axios } from '../../../api';
import CuratedMoive from '../CuratedMovie';
import PopularHashTag from '../PopularHashTag';
import RecentlySearch from '../RecentlySearch';
import { Container, Contents } from './styles';
import SearchBarRelated from '../SearchBarRelated';

function SearchBarModal({ isSignIn, keyword }) {
  const [recent, setRecent] = useState([]);
  const [hashtag, setHashTag] = useState([]);
  const componentMounted = useRef(true);
  const requestRecentlySearch = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: '/api/member/search',
        data: null,
        params: {
          length: 5,
        },
      });
      if (componentMounted) {
        console.log(res);
        setRecent([...recent, ...res.data.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const requestPopularHashTag = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: '/api/hashtag/most-popular',
        data: null,
        params: {
          length: 5,
        },
      });
      if (componentMounted) {
        console.log(res);
        setHashTag([...hashtag, ...res.data.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useLayoutEffect(() => {
    componentMounted.current = true;
    if (isSignIn) requestRecentlySearch();
    requestPopularHashTag();
    return () => {
      componentMounted.current = false;
    };
  }, [isSignIn]);
  return (
    <Container>
      <Contents>
        {keyword.length < 2 ? (
          <>
            <RecentlySearch contents={recent} />
            <PopularHashTag contents={hashtag} />
            <CuratedMoive />
          </>
        ) : null}
        {(keyword[0] !== '#' && keyword[0] !== '@' && keyword.length >= 2) ||
        ((keyword[0] === '#' || keyword[0] === '@') && keyword.length >= 3) ? (
          <SearchBarRelated keyword={keyword}></SearchBarRelated>
        ) : null}
      </Contents>
    </Container>
  );
}
SearchBarModal.propTypes = {
  isSignIn: propTypes.bool,
  keyword: propTypes.string,
};
export default React.memo(SearchBarModal);
