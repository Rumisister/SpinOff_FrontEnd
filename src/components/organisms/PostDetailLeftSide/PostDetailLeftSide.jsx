import React from 'react';
import propTypes from 'prop-types';
import {
  PostDetailLeftSide_Movie,
  PostDetailLeftSide_PostLists,
} from '../../molecules';
import { Container } from './styles';

function PostDetailLeftSide({ contents }) {
  return (
    <Container>
      <PostDetailLeftSide_PostLists contents={contents?.postedMedias} />
      <PostDetailLeftSide_Movie contents={contents?.movie} />
    </Container>
  );
}
PostDetailLeftSide.propTypes = {
  contents: propTypes.object,
};
export default PostDetailLeftSide;
