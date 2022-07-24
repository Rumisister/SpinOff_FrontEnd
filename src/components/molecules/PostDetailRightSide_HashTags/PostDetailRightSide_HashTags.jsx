import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { NormalButton } from '../../atoms';
import {
  ButtonContainer,
  Container,
  More,
  normalButtonStyle,
  TagContainer,
} from './styles';

const colors = ['#2800ee', '#f24860', '#bc32ea', '#f9cf00', '#000000'];

function PostDetailRightSide_HashTags({ contents }) {
  const containerEl = useRef(null);
  const tagContainerEl = useRef(null);
  const [more, setMore] = useState(false);
  const [hidden, setHidden] = useState(false);
  console.log(contents);
  useEffect(() => {
    if (containerEl.current.clientHeight < tagContainerEl.current.clientHeight)
      setMore(true);
    else setMore(false);
  }, [contents]);
  const onClickMore = () => {
    setHidden(prev => !prev);
  };
  return (
    <Container ref={containerEl} isHidden={hidden}>
      <TagContainer ref={tagContainerEl}>
        {contents?.hashtags?.map(tag => {
          const randColor = colors[Math.floor(Math.random() * 5)];
          return (
            <ButtonContainer key={tag.id}>
              <NormalButton
                Style={{
                  ...normalButtonStyle,
                  border: `2px solid ${randColor}`,
                }}
              >
                {tag.content}
              </NormalButton>
            </ButtonContainer>
          );
        })}
      </TagContainer>
      {more ? <More isHidden={!hidden} onClick={onClickMore} /> : null}
    </Container>
  );
}
PostDetailRightSide_HashTags.propTypes = {
  contents: propTypes.array,
};
export default PostDetailRightSide_HashTags;
