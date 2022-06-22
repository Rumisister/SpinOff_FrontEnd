import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchMovieContents } from '../../components/organisms';
import { movieType } from '../../store/SearchFilter/action';
import { Container } from './styles';

function SearchMovie() {
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const ref = useRef({ rootRef, targetRef });
  const keyword = new URLSearchParams(useLocation().search).get('keyword');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieType());
  }, []);
  return (
    <Container ref={rootRef}>
      <SearchMovieContents ref={ref} keyword={keyword} />
      <div ref={targetRef} />
    </Container>
  );
}

export default SearchMovie;
