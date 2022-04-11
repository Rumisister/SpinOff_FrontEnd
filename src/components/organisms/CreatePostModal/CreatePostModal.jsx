import React, { useEffect, useState } from 'react';
import { NormalButton } from '../../atoms';
import { CreatePostLeftSide, CreatePostRightSide } from '..';
import {
  Container,
  CreatePost,
  Modal,
  Xmark,
  NormalButtonStyle,
  NormalButtonStyle2,
} from './styles';
import { useDispatch } from 'react-redux';
import { onPostReset, requestCreatePost } from '../../../store/Post/action';

function CreatePostModal() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const onCreateForm = () => {
    document.body.style.overflow = 'hidden';
    setOpen(prev => !prev);
  };
  useEffect(() => {
    if (!open) {
      dispatch(onPostReset());
    }
  }, [open]);
  const closeCreateForm = () => {
    document.body.style.overflow = 'unset';
    setOpen(prev => !prev);
  };
  const onRequestPost = () => {
    dispatch(requestCreatePost());
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
            <CreatePostRightSide />
            <NormalButton Style={NormalButtonStyle2} onClick={onRequestPost}>
              작성완료
            </NormalButton>
          </Container>
        </Modal>
      ) : null}
    </>
  );
}

export default CreatePostModal;
