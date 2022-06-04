import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SearchMovieContents } from '../../components/organisms';
import { movieType } from '../../store/SearchFilter/action';
import { Container } from './styles';

function SearchMovie() {
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const ref = useRef({ rootRef, targetRef });
  const { keyword } = useParams();
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
