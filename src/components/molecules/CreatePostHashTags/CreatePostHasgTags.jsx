import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import {
  ButtonContainer,
  ButtonHover,
  Container,
  DeleteIcon,
  More,
  normalButtonStyle,
  TagContainer,
} from './styles';
import { NormalButton } from '../../atoms';
import { useDispatch } from 'react-redux';
import { changeHashTags } from '../../../store/Post/action';

const colors = ['#2800ee', '#f24860', '#bc32ea', '#f9cf00', '#000000'];

function CreatePostHasgTags({ hashTags }) {
  const containerEl = useRef(null);
  const tagContainerEl = useRef(null);
  const [more, setMore] = useState(false);
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (containerEl.current.clientHeight < tagContainerEl.current.clientHeight)
      setMore(true);
    else setMore(false);
  }, [hashTags]);
  const onClickMore = () => {
    setHidden(prev => !prev);
  };
  const onTagRemove = id => {
    console.log(id + '삭제');
    dispatch(changeHashTags([...hashTags.filter(f => f.id !== id)]));
  };
  return (
    <Container ref={containerEl} isHidden={hidden}>
      <TagContainer ref={tagContainerEl}>
        {hashTags.map(tag => {
          const randColor = colors[Math.floor(Math.random() * 5)];
          return (
            <ButtonContainer key={tag.id}>
              <NormalButton
                Style={{
                  ...normalButtonStyle,
                  border: `2px solid ${randColor}`,
                }}
              >
                {tag.title}
              </NormalButton>
              <ButtonHover>
                <DeleteIcon onClick={() => onTagRemove(tag.id)} />
              </ButtonHover>
            </ButtonContainer>
          );
        })}
      </TagContainer>
      {more ? <More isHidden={!hidden} onClick={onClickMore} /> : null}
    </Container>
  );
}

CreatePostHasgTags.propTypes = {
  hashTags: propTypes.array,
};

export default React.memo(CreatePostHasgTags);
