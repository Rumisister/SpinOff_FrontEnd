import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SearchAllContents } from '../../components/organisms';
import { allType } from '../../store/SearchFilter/action';
import { Container } from './styles';

function SearchAll() {
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const ref = useRef({ rootRef, targetRef });
  const { keyword } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allType());
  }, []);
  console.log(ref);
  console.log(keyword);
  return (
    <Container ref={rootRef}>
      <SearchAllContents ketword={keyword} ref={ref} />
      <div ref={targetRef} />
    </Container>
  );
}

export default SearchAll;
