import React, { useState } from 'react';
import propTypes from 'prop-types';
import PostDetailLeftSide from '../PostDetailLeftSide';
import { Container } from './styles';
import PostDetailRightSide from '../PostDetailRightSide';
import PostDetailComment from '../PostDetialComment';

function PostDetailAboutPost({ contents }) {
  const [openComment, setOpenComment] = useState(false);
  return (
    <Container active={openComment}>
      <PostDetailLeftSide contents={contents} />
      <PostDetailRightSide
        contents={contents}
        setOpenComment={setOpenComment}
      />
      <PostDetailComment openComment={openComment} postId={contents.postId} />
    </Container>
  );
}

PostDetailAboutPost.propTypes = {
  contents: propTypes.object,
};

export default PostDetailAboutPost;
