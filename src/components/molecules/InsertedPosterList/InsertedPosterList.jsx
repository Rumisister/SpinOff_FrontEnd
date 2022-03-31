import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import {
  Container,
  DeleteIcon,
  ImageContainer,
  ImageHover,
  LeftScroll,
  PosterList,
  posterStyle,
  RightScroll,
} from './styles';
import { Poster } from '../../atoms';

function InsertedPosterList({ fileList, onRemove }) {
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
    setRightMove(prev => (prev + 75 > 0 ? 0 : prev + 75));
  };
  const onRightMove = () => {
    setRightMove(prev =>
      PosterListEl.current.clientWidth + prev > ContainerEl.current.clientWidth
        ? prev - 75
        : prev,
    );
  };
  console.log(onRemove);
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
  }, [fileList]);
  return (
    <>
      {showScroll && (
        <>
          <LeftScroll onClick={onLeftMove} />
          <RightScroll onClick={onRightMove} />
        </>
      )}
      <Container ref={ContainerEl}>
        <PosterList ref={PosterListEl} moveRight={rightMove}>
          {fileList.map(file => (
            <ImageContainer key={file.id}>
              <Poster Style={posterStyle} src={file.url} />
              <ImageHover>
                <DeleteIcon onClick={() => onRemove(file.id)} />
              </ImageHover>
            </ImageContainer>
          ))}
        </PosterList>
      </Container>
    </>
  );
}

InsertedPosterList.propTypes = {
  fileList: propTypes.array,
  onRemove: propTypes.func,
};

export default InsertedPosterList;
