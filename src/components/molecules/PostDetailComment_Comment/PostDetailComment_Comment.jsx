import React from 'react';
import propTypes from 'prop-types';
import { Poster } from '../../atoms';
import {
  CommentContentContainer,
  CommentFooter,
  CommentImageContainer,
  CommentMessage,
  CommentUserNickName,
  Container,
  imageStlye,
} from './styles';

function PostDetailComment_Comment({ contents, isChild }) {
  console.log(contents);
  console.log(Poster);
  console.log(contents.member.profile);
  return (
    <Container isChild={isChild}>
      <CommentImageContainer>
        <Poster src={contents.member.profile} Style={imageStlye} />
      </CommentImageContainer>
      <CommentContentContainer>
        <CommentUserNickName>{contents.member.nickname}</CommentUserNickName>
        <CommentMessage>{contents.content}</CommentMessage>
        <CommentFooter></CommentFooter>
      </CommentContentContainer>
    </Container>
  );
}

PostDetailComment_Comment.propTypes = {
  contents: propTypes.object,
  isChild: propTypes.bool,
};

export default PostDetailComment_Comment;
