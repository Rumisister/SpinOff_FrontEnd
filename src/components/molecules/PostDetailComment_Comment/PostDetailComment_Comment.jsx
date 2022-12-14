import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import { Poster } from '../../atoms';
import {
  CommentContentContainer,
  CommentFooter,
  CommentImageContainer,
  CommentMessage,
  CommentUserNickName,
  Container,
  Footer_ChildCount,
  Footer_Date,
  Footer_Like,
  Footer_More,
  iconStyle,
  iconStyle2,
  iconStyle3,
  imageStyle,
  MoreMenu,
  MoreMenuBar,
  ProfileContainer,
} from './styles';
import likeIcon from '../../../assets/images/like.png';
import likedIcon from '../../../assets/images/liked.png';
import comment from '../../../assets/images/comment.png';
import more from '../../../assets/images/more.png';
import defaultProfile from '../../../assets/images/baseProfile.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { axios } from '../../../api';

function PostDetailComment_Comment({
  contents,
  isChild,
  requestDeleteComment,
}) {
  const [showMoreMenuBar, setShowMoreMenuBar] = useState(false);
  const [like, setLike] = useState(contents?.liked);
  const [likeSize, setLikeSize] = useState(contents?.likeSize || 0);
  const debouncer = useRef(null);
  const fotterEl = useRef(null);
  const moreButtonEl = useRef(null);
  const makeDate = useCallback(() => {
    //console.log(contents.createTime);
    const date = new window.Date(contents?.createTime);
    //console.log(date.toLocaleDateString().split('.'));
    let [year, month, day] = date.toLocaleDateString().split('.');
    year = year?.trim();
    month = month?.trim();
    day = day?.trim();
    if (month.length === 1) month = '0' + month;
    if (day.length === 1) day = '0' + day;
    return `${year?.slice(2) || ''}.${month || ''}.${day || ''}`;
  }, [contents]);
  const handleClickOutSide = useCallback(e => {
    setShowMoreMenuBar(prev => {
      if (
        prev &&
        !fotterEl.current.contains(e.target) &&
        !moreButtonEl.current.contains(e.target)
      )
        return !prev;
      return prev;
    });
  }, []);
  useEffect(() => {
    window.addEventListener('click', handleClickOutSide);
    return () => {
      window.removeEventListener('click', handleClickOutSide);
    };
  }, [showMoreMenuBar]);
  const requestLike = useCallback(async () => {
    try {
      const res = await axios({
        method: like ? 'delete' : 'post',
        url: `/api/post/comment/${contents?.commentId}/like`,
      });
      console.log(res);
    } catch (error) {
      alert('몇초 후 다시 시도하여 주세요!');
      setLike(prev => {
        if (prev) {
          setLikeSize(prev => prev - 1);
          return !prev;
        } else {
          setLikeSize(prev => prev + 1);
          return !prev;
        }
      });
      console.log(error);
    }
  }, [like]);
  const toggleLikeState = useCallback(() => {
    setLike(prev => {
      if (prev) {
        setLikeSize(prev => prev - 1);
        return !prev;
      } else {
        setLikeSize(prev => prev + 1);
        return !prev;
      }
    });
    debouncer.current = setTimeout(() => {
      requestLike();
    }, 200);
  }, [requestLike]);
  return (
    <Container isChild={isChild}>
      <CommentImageContainer>
        <Poster
          src={contents.member.profile || defaultProfile}
          Style={imageStyle}
        />
      </CommentImageContainer>
      <CommentContentContainer>
        <CommentUserNickName>{contents.member.nickname}</CommentUserNickName>
        <CommentMessage>{contents.content}</CommentMessage>
        <CommentFooter>
          <Footer_Date>{makeDate()}</Footer_Date>
          <Footer_Like onClick={toggleLikeState}>
            <Poster src={like ? likedIcon : likeIcon} Style={iconStyle} />
            {likeSize}
          </Footer_Like>
          {!isChild ? (
            <Footer_ChildCount>
              <Poster src={comment} Style={iconStyle2} />
              {contents?.children?.length}
            </Footer_ChildCount>
          ) : null}
          <Footer_More>
            <ProfileContainer
              ref={moreButtonEl}
              onClick={() => {
                setShowMoreMenuBar(prev => {
                  return !prev;
                });
              }}
            >
              <Poster src={more} Style={iconStyle3} />
            </ProfileContainer>
            <MoreMenuBar show={showMoreMenuBar} ref={fotterEl}>
              {contents?.hasAuth ? (
                <MoreMenu
                  borderRadius={'5px 5px 0px 0px;'}
                  onClick={() => requestDeleteComment(contents?.commentId)}
                >
                  삭제
                </MoreMenu>
              ) : null}
              <MoreMenu
                borderRadius={contents?.hasAuth ? '0px 0px 5px 5px;' : '5px'}
              >
                신고
              </MoreMenu>
            </MoreMenuBar>
          </Footer_More>
        </CommentFooter>
      </CommentContentContainer>
    </Container>
  );
}

PostDetailComment_Comment.propTypes = {
  contents: propTypes.object,
  isChild: propTypes.bool,
  requestDeleteComment: propTypes.func,
};

export default React.memo(PostDetailComment_Comment);
