import React, { useState } from 'react';
import propTypes from 'prop-types';
import { NewCollection, GetCollectionList } from '..';
import { Container, ListIcon } from './styles';

function CollectionList({ isPost }) {
  const [open, setOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);

  return (
    <Container>
      {'컬렉션 없음'}
      <ListIcon
        onClick={() => {
          setOpen(prev => !prev);
          setNewOpen(false);
        }}
      />
      {open && !newOpen ? (
        <GetCollectionList setNewOpen={setNewOpen} isPost={isPost} />
      ) : null}
      {open && newOpen ? <NewCollection setNewOpen={setNewOpen} /> : null}
    </Container>
  );
}

CollectionList.propTypes = {
  isPost: propTypes.bool,
};
export default React.memo(CollectionList);
