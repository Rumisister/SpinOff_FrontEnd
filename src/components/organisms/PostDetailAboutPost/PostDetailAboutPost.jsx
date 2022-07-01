import React from 'react';
import propTypes from 'prop-types';
import PostDetailLeftSide from '../PostDetailLeftSide';
import { Container } from './styles';
import PostDetailRightSide from '../PostDetailRightSide';

function PostDetailAboutPost({ contents }) {
  return (
    <Container>
      <PostDetailLeftSide contents={contents} />
      <PostDetailRightSide contents={contents} />
    </Container>
  );
}

PostDetailAboutPost.propTypes = {
  contents: propTypes.object,
};

export default PostDetailAboutPost;
