import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import {
  Container,
  LeftScroll,
  PosterList,
  RightScroll,
  Wrapper,
} from './styles';
import SearchResultCollection from '../SearchResultCollection';

function SearchAllCollections({ contents }) {
  const [rightMove, setRightMove] = useState(0);
  const [showScroll, setShowScroll] = useState(false);
  const ContainerEl = useRef();
  const PosterListEl = useRef();
  const throttler = useRef(null);

  const onResize = () => {
    if (throttler.current) return;
    throttler.current = setTimeout(() => {
      if (ContainerEl.current.clientWidth < PosterListEl.current.clientWidth)
        setShowScroll(true);
      else setShowScroll(false);
      throttler.current = null;
    }, 800);
  };
  const onLeftMove = () => {
    setRightMove(prev => (prev + 330 > 0 ? 0 : prev + 330));
  };
  const onRightMove = () => {
    setRightMove(prev =>
      PosterListEl.current.clientWidth + prev > ContainerEl.current.clientWidth
        ? prev - 330
        : prev,
    );
  };
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  useEffect(() => {
    if (ContainerEl.current.clientWidth < PosterListEl.current.clientWidth)
      setShowScroll(true);
    else setShowScroll(false);
    return () => {
      setRightMove(0);
    };
  }, [contents]);
  return (
    <Wrapper>
      {showScroll && (
        <>
          <LeftScroll onClick={onLeftMove} />
          <RightScroll onClick={onRightMove} />
        </>
      )}
      <Container ref={ContainerEl}>
        <PosterList ref={PosterListEl} moveRight={rightMove}>
          {contents.map(content => (
            <SearchResultCollection
              key={content.collectionId}
              type={'all'}
              content={content}
            />
          ))}
        </PosterList>
      </Container>
    </Wrapper>
  );
}
SearchAllCollections.propTypes = {
  contents: propTypes.array,
};
export default SearchAllCollections;
