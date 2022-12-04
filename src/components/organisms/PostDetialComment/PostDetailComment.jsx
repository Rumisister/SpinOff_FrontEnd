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
const dummyComment = [
  {
    blocked: true,
    children: [
      {
        blocked: true,
        children: [],
        commentId: 1,
        content:
          "I'm such a good surfer 가라앉지 않기 비틀 비 비틀 거리다가 풍덩 Uh 빠지더라도 구명복 따윈 졸업 I'm such a good surfer 휩쓸리지 않기 울렁 우 울렁 거리다가 Throw up 게워내더라도 지는 건 난 못 참아 제일 높은 파도 올라타타 라차차우아 해일과 함께 사라질 타이밍 그건 내가 골라 무슨 소리 겁이 나기는 재밌지 뭐 어어어 푸푸푸 또 허허허 우우우적",
        createTime: '2022-11-20T07:54:05.741Z',
        deleted: true,
        hasAuth: true,
        likeSize: 0,
        liked: false,
        member: {
          memberId: 1,
          nickname: '똥글이',
          profile:
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F446586f5-de38-4ddc-b7cd-3fd5a3799221%2FToongri.png?table=space&id=8286226f-c017-460e-97aa-ca53116fac84&width=60&userId=fdd93fae-3175-4a69-b565-60b84abf2546&cache=v2',
        },
        parentId: 0,
      },
      {
        blocked: true,
        children: [],
        commentId: 2,
        content: '안녕하세요 통그리 입니다',
        createTime: '2022-11-20T07:54:05.741Z',
        deleted: true,
        hasAuth: true,
        likeSize: 0,
        liked: false,
        member: {
          memberId: 2,
          nickname: '똥글이',
          profile:
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F446586f5-de38-4ddc-b7cd-3fd5a3799221%2FToongri.png?table=space&id=8286226f-c017-460e-97aa-ca53116fac84&width=60&userId=fdd93fae-3175-4a69-b565-60b84abf2546&cache=v2',
        },
        parentId: 0,
      },
    ],
    commentId: 0,
    content: '안녕하세요 통그리 입니다',
    createTime: '2022-11-20T07:54:05.741Z',
    deleted: true,
    hasAuth: true,
    likeSize: 0,
    liked: false,
    member: {
      memberId: 0,
      nickname: '똥글이',
      profile:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F446586f5-de38-4ddc-b7cd-3fd5a3799221%2FToongri.png?table=space&id=8286226f-c017-460e-97aa-ca53116fac84&width=60&userId=fdd93fae-3175-4a69-b565-60b84abf2546&cache=v2',
    },
    parentId: 0,
  },
  {
    blocked: true,
    children: [],
    commentId: 3,
    content: '안녕하세요 통그리 입니다',
    createTime: '2022-11-20T07:54:05.741Z',
    deleted: true,
    hasAuth: true,
    likeSize: 0,
    liked: false,
    member: {
      memberId: 3,
      nickname: '똥글이',
      profile:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F446586f5-de38-4ddc-b7cd-3fd5a3799221%2FToongri.png?table=space&id=8286226f-c017-460e-97aa-ca53116fac84&width=60&userId=fdd93fae-3175-4a69-b565-60b84abf2546&cache=v2',
    },
    parentId: 3,
  },
];
function PostDetailComment({ openComment, postId }) {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    let componentMounted = true;
    const requestComment = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: `
          /api/post/${postId}/comment`,
        });
        console.log(res.data.data);
        if (componentMounted) setCommentData([...res.data.data]);
        console.log(commentData);
      } catch (error) {
        console.log(error);
      }
    };
    if (openComment) requestComment();
    return () => {
      componentMounted = false;
    };
  }, [openComment]);
  const recursiveComment = useCallback((comment, isChild) => {
    console.log(comment);
    return comment?.map(content => {
      return (
        <>
          <PostDetailComment_Comment
            key={content.commentId}
            isChild={isChild}
            contents={content}
          />
          {content.children.length > 0
            ? recursiveComment(content.children, true)
            : null}
        </>
      );
    });
  }, []);

  return (
    <Container active={openComment}>
      <CommentCountContainer>
        댓글
        <CommentCount>4개</CommentCount>
      </CommentCountContainer>
      <CommnetContainer>
        {recursiveComment(dummyComment, false)}
      </CommnetContainer>
      <AddCommentContainer>
        <PostDetailComment_AddComment />
      </AddCommentContainer>
    </Container>
  );
}

PostDetailComment.propTypes = {
  openComment: propTypes.bool,
  postId: propTypes.number,
};
export default PostDetailComment;
