import React, { useEffect, useState } from 'react';
import { NormalButton } from '../../atoms';
import { CreatePostLeftSide } from '../../molecules';
import {
  Container,
  CreatePost,
  Modal,
  Xmark,
  NormalButtonStyle,
  NormalButtonStyle2,
  RightContainer,
} from './styles';

function CreatePostModal() {
  const [open, setOpen] = useState(false);

  const onCreateForm = () => {
    document.body.style.overflow = 'hidden';
    setOpen(prev => !prev);
  };
  useEffect(() => {}, []);
  const closeCreateForm = () => {
    document.body.style.overflow = 'unset';
    setOpen(prev => !prev);
  };

  return (
    <>
      <CreatePost onClick={onCreateForm} />
      {open ? (
        <Modal isOpen={open}>
          <Xmark onClick={closeCreateForm} />
          <Container>
            <NormalButton Style={NormalButtonStyle}>큐레이션 하기</NormalButton>
            <CreatePostLeftSide />
            <RightContainer></RightContainer>
            <NormalButton Style={NormalButtonStyle2}>작성완료</NormalButton>
          </Container>
        </Modal>
      ) : null}
    </>
  );
}

export default CreatePostModal;
