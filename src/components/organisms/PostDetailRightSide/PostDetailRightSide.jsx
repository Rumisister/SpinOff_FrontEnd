import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import {
  PostDetailRightSide_Footer,
  PostDetailRightSide_HashTags,
  PostDetailRightSide_Header,
  PostDetailRightSide_Main,
} from '../../molecules';

function PostDetailRightSide({ contents, setOpenComment }) {
  return (
    <Container>
      <PostDetailRightSide_Header contents={contents} />
      <PostDetailRightSide_Main contents={contents} />
      <PostDetailRightSide_HashTags contents={contents} />
      <PostDetailRightSide_Footer
        contents={contents}
        setOpenComment={setOpenComment}
      />
    </Container>
  );
}

PostDetailRightSide.propTypes = {
  contents: propTypes.object,
  setOpenComment: propTypes.func,
};

export default PostDetailRightSide;
