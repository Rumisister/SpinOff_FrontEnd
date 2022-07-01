import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Dot,
  ImageContainer,
  imageStyle,
  Indicator,
  IndicatorContainer,
  LeftScroll,
  PosterListContainer,
  RightScroll,
} from './styles';
import propTypes from 'prop-types';
import { Poster } from '../../atoms';

function PostDetailLeftSide_PostLists({ contents }) {
  const ContainerEl = useRef(null);
  const PosterListEl = useRef(null);
  const throttler = useRef(null);
  const [showScroll, setShowScroll] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [imageWidth, setImageWidth] = useState(null);
  const onResize = () => {
    if (throttler.current) return;
    throttler.current = setTimeout(() => {
      setImageWidth(ContainerEl.current.clientWidth);
      if (ContainerEl.current.clientWidth < PosterListEl.current.clientWidth)
        setShowScroll(true);
      else setShowScroll(false);
      throttler.current = null;
    }, 800);
  };
  const onRightMove = useCallback(() => {
    setMoveCount(prev => {
      if (-prev === contents?.length - 1) return prev;
      return --prev;
    });
  }, [contents]);
  const onLeftMove = useCallback(() => {
    setMoveCount(prev => {
      if (prev === 0) return prev;
      return ++prev;
    });
  }, [contents]);
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  useEffect(() => {
    setImageWidth(ContainerEl.current.clientWidth);
    if (ContainerEl.current.clientWidth < PosterListEl.current.clientWidth)
      setShowScroll(true);
    else setShowScroll(false);
  }, [contents]);
  return (
    <Container ref={ContainerEl}>
      <PosterListContainer
        ref={PosterListEl}
        moveCount={moveCount}
        imageWidth={imageWidth}
      >
        {contents?.map(content => (
          <ImageContainer key={content.postedMediaId} imageWidth={imageWidth}>
            <Poster src={content.url} Style={imageStyle} />
          </ImageContainer>
        ))}
      </PosterListContainer>
      {showScroll && (
        <>
          <LeftScroll onClick={onLeftMove} />
          <RightScroll onClick={onRightMove} />
        </>
      )}
      <IndicatorContainer>
        <Indicator>
          {contents?.map((content, idx) => (
            <Dot
              key={content.postedMediaId}
              selected={-moveCount === idx}
              onClick={() => setMoveCount(-idx)}
            />
          ))}
        </Indicator>
      </IndicatorContainer>
    </Container>
  );
}
PostDetailLeftSide_PostLists.propTypes = {
  contents: propTypes.array,
};

export default React.memo(PostDetailLeftSide_PostLists);
