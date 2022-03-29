import React, { useState } from 'react';
import { CreatePost, Modal, Xmark } from './styles';

function CreatePostModal() {
  const [open, setOpen] = useState(false);
  const onCreateForm = () => {
    document.body.style.overflow = 'hidden';
    setOpen(prev => !prev);
  };

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
        </Modal>
      ) : null}
    </>
  );
}

export default CreatePostModal;
