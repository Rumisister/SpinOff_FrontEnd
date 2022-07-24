import React from 'react';
import { Container } from './style';
import propTypes from 'prop-types';

function PostDetailComment({ openComment }) {
  return <Container active={openComment}></Container>;
}

PostDetailComment.propTypes = {
  openComment: propTypes.bool,
};
export default PostDetailComment;
