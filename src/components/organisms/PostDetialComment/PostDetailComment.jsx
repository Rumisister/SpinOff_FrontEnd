import React, { useState } from 'react';
import {
  AddCommentContainer,
  CommentCount,
  CommentCountContainer,
  CommnetContainer,
  Container,
} from './style';
import propTypes from 'prop-types';
import { useEffect } from 'react';
import { axios } from '../../../api';
import {
  PostDetailComment_AddComment,
  PostDetailComment_Comment,
} from '../../molecules';
import { useCallback } from 'react';
import { useRef } from 'react';

function PostDetailComment({ openComment, postId }) {
  const [commentData, setCommentData] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const componentMounted = useRef(null);
  const countComment = useCallback(comment => {
    return comment.reduce((acc, cur) => {
      if (!cur?.children || !cur?.children?.length === 0)
        return acc + 1 + cur.children.length;
      else return acc + 1;
    }, 0);
  }, []);
  const requestComment = useCallback(async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `
        /api/post/${postId}/comment`,
      });
      console.log(res.data.data);
      if (componentMounted.current) {
        setCommentCount(countComment([...res.data.data]));
        setCommentData([...res.data.data]);
      }
      console.log(commentData);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);
  const requestAddComment = useCallback(
    async content => {
      try {
        const res = await axios({
          method: 'post',
          url: `/api/post/${postId}/comment`,
          data: {
            content,
            parnetId: null,
          },
        });
        console.log(res);
        requestComment();
      } catch (error) {
        console.log(error);
      }
    },
    [postId],
  );
  const requestDeleteComment = useCallback(
    async commentId => {
      try {
        const res = await axios({
          method: 'delete',
          url: `/api/post/comment/${commentId}`,
        });
        console.log(res);
        console.log(postId);
        requestComment();
      } catch (error) {
        console.log(error);
      }
    },
    [requestComment],
  );
  useEffect(() => {
    componentMounted.current = true;
    if (openComment) requestComment();
    return () => {
      componentMounted.current = false;
    };
  }, [openComment]);
  const recursiveComment = useCallback(
    (comment, isChild) => {
      return comment?.map(content => {
        return (
          <>
            <PostDetailComment_Comment
              key={content.commentId}
              isChild={isChild}
              contents={content}
              requestDeleteComment={requestDeleteComment}
            />
            {content.children.length > 0
              ? recursiveComment(content.children, true)
              : null}
          </>
        );
      });
    },
    [requestDeleteComment],
  );
  return (
    <Container active={openComment}>
      <CommentCountContainer>
        댓글
        <CommentCount>{commentCount}개</CommentCount>
      </CommentCountContainer>
      <CommnetContainer>
        {recursiveComment(commentData, false)}
      </CommnetContainer>
      <AddCommentContainer>
        <PostDetailComment_AddComment requestAddComment={requestAddComment} />
      </AddCommentContainer>
    </Container>
  );
}

PostDetailComment.propTypes = {
  openComment: propTypes.bool,
  postId: propTypes.number,
};
export default PostDetailComment;
