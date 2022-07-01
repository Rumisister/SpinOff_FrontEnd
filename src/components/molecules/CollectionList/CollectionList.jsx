import React, { useState } from 'react';
import propTypes from 'prop-types';
import { NewCollection, GetCollectionList } from '..';
import { Container, ListIcon } from './styles';
import { useDispatch } from 'react-redux';
import { changeCollection } from '../../../store/Post/action';

function CollectionList({ isPost, children, postId, setSaveType }) {
  const [open, setOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <Container>
      {children || '컬렉션 없음'}
      <ListIcon
        onClick={() => {
          setOpen(prev => {
            if (prev && postId) {
              dispatch(changeCollection([]));
            }
            if (postId) {
              setSaveType(() => {
                return prev ? 'one' : 'all';
              });
            }
            return !prev;
          });
          setNewOpen(false);
        }}
      />
      {open && !newOpen ? (
        <GetCollectionList
          setNewOpen={setNewOpen}
          isPost={isPost}
          postId={postId}
        />
      ) : null}
      {open && newOpen ? <NewCollection setNewOpen={setNewOpen} /> : null}
    </Container>
  );
}

CollectionList.propTypes = {
  isPost: propTypes.bool,
  children: propTypes.string,
  postId: propTypes.string,
  initialList: propTypes.array,
  setSaveType: propTypes.func,
};
export default React.memo(CollectionList);
