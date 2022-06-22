import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchCuratorContents } from '../../components/organisms';
import { memberType } from '../../store/SearchFilter/action';
import { Container } from './styles';

function SearchCurator() {
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const ref = useRef({ rootRef, targetRef });
  const keyword = new URLSearchParams(useLocation().search).get('keyword');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(memberType());
  }, []);
  return (
    <Container ref={rootRef}>
      <SearchCuratorContents ref={ref} keyword={keyword} />
      <div ref={targetRef} />
    </Container>
  );
}

export default SearchCurator;
