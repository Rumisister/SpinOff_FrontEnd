import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SearchCollectionContents } from '../../components/organisms';
import { collectionType } from '../../store/SearchFilter/action';
import { Container } from './styles';

function SearchCollection() {
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const ref = useRef({ rootRef, targetRef });
  const { keyword } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collectionType());
  }, []);
  return (
    <Container ref={rootRef}>
      <SearchCollectionContents ref={ref} keyword={keyword} />
      <div ref={targetRef} />
    </Container>
  );
}

export default SearchCollection;
