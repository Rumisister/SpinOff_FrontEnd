import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import {
  PostDetailRightSide_Header,
  PostDetailRightSide_Main,
} from '../../molecules';

function PostDetailRightSide({ contents }) {
  return (
    <Container>
      <PostDetailRightSide_Header contents={contents} />
      <PostDetailRightSide_Main contents={contents} />
    </Container>
  );
}

PostDetailRightSide.propTypes = {
  contents: propTypes.object,
};

export default PostDetailRightSide;
