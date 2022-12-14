import React, { useState } from 'react';
import {
  buttonStyle,
  buttonStyle2,
  Comment,
  CommentMore,
  Container,
  CuratorContainer,
  CuratorNameFollowContainer,
  imgStyle,
  imgStyle2,
  imgStyle3,
  Like,
  LikeCommentContainer,
} from './styles';
import propTypes from 'prop-types';
import { NormalButton, Poster } from '../../atoms';
import defaultProfile from '../../../assets/images/baseProfile.png';
import likeIcon from '../../../assets/images/like.png';
import likedIcon from '../../../assets/images/liked.png';
import commentIcon from '../../../assets/images/comment.png';
import commentMore from '../../../assets/images/moreComment.png';

function PostDetailRightSide_Footer({ contents, setOpenComment }) {
  const [more, setMore] = useState(null);
  return (
    <Container>
      <CuratorNameFollowContainer>
        <CuratorContainer>
          <Poster
            src={contents?.member?.profile || defaultProfile}
            Style={imgStyle}
          />
          {`${contents?.member?.nickname || ''}(@${
            contents?.member?.accountId || ''
          })`}
          <NormalButton
            Style={contents.member?.followed ? buttonStyle2 : buttonStyle}
          >
            {contents.member?.followed ? '팔로잉' : '팔로우'}
          </NormalButton>
        </CuratorContainer>
      </CuratorNameFollowContainer>
      <LikeCommentContainer>
        <Like>
          <Poster
            src={contents?.liked ? likedIcon : likeIcon}
            Style={imgStyle2}
          />
          {contents?.likedSize || 0}
        </Like>
        <Comment>
          <Poster src={commentIcon} Style={imgStyle2} />
          {contents?.commentSize}
        </Comment>
        <CommentMore
          onClick={() => {
            setOpenComment(prev => {
              setMore(!prev);
              return !prev;
            });
          }}
        >
          댓글 더보기
          <Poster
            src={commentMore}
            Style={
              !more ? imgStyle3 : { ...imgStyle3, transform: 'rotate(180deg)' }
            }
          />
        </CommentMore>
      </LikeCommentContainer>
    </Container>
  );
}

PostDetailRightSide_Footer.propTypes = {
  contents: propTypes.object,
  setOpenComment: propTypes.func,
};

export default PostDetailRightSide_Footer;
