import React, { useCallback, useEffect, useState } from 'react';
import { TextArea } from '../../atoms';
import { Container } from './styles';
//import propTypes from 'prop-types';

function PostDetailComment_AddComment() {
  const [comment, setComment] = useState('');
  const onChangeComment = useCallback(
    e => {
      if (e.target.value.length <= 300) setComment(e.target.value);
    },
    [comment],
  );
  useEffect(() => console.log(comment), [comment]);
  return (
    <Container>
      <TextArea value={comment} onChange={onChangeComment} />
    </Container>
  );
}
//PostDetailComment_AddComment.propTypes = {};
export default React.memo(PostDetailComment_AddComment);
