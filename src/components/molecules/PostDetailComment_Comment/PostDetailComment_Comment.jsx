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
import like from '../../../assets/images/like.png';
import liked from '../../../assets/images/liked.png';
import comment from '../../../assets/images/comment.png';
import more from '../../../assets/images/more.png';
import defaultProfile from '../../../assets/images/baseProfile.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function PostDetailComment_Comment({ contents, isChild }) {
  const [showMoreMenuBar, setShowMoreMenuBar] = useState(false);
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
    return `${year.slice(2)}.${month}.${day}`;
  }, [contents]);
  const handleClickOutwSide = useCallback(
    e => {
      if (
        (showMoreMenuBar && !fotterEl.current.contains(e.target)) ||
        !(moreButtonEl.current === e.target)
      )
        setShowMoreMenuBar(prev => {
          if (prev) return !prev;
          return prev;
        });
    },
    [showMoreMenuBar],
  );
  console.log(handleClickOutwSide);
  useEffect(() => {}, [showMoreMenuBar]);
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
          <Footer_Like>
            <Poster src={contents?.liked ? liked : like} Style={iconStyle} />
            {contents?.likeSize}
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
                  console.log(prev);
                  console.log('이미지 프리뷰@');
                  return !prev;
                });
              }}
            >
              <Poster src={more} Style={iconStyle3} />
            </ProfileContainer>
            <MoreMenuBar show={showMoreMenuBar} ref={fotterEl}>
              {contents?.hasAuth ? (
                <MoreMenu borderRadius={'5px 5px 0px 0px;'}>삭제</MoreMenu>
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
};

export default React.memo(PostDetailComment_Comment);
