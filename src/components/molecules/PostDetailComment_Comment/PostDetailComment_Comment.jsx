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
} from './styles';
import like from '../../../assets/images/like.png';
import liked from '../../../assets/images/liked.png';
import comment from '../../../assets/images/comment.png';
import more from '../../../assets/images/more.png';

function PostDetailComment_Comment({ contents, isChild }) {
  const makeDate = useCallback(() => {
    console.log(contents.createTime);
    const date = new window.Date(contents?.createTime);
    console.log(date.toLocaleDateString().split('.'));
    let [year, month, day] = date.toLocaleDateString().split('.');
    year = year?.trim();
    month = month?.trim();
    day = day?.trim();
    if (month.length === 1) month = '0' + month;
    if (day.length === 1) day = '0' + day;
    return `${year.slice(2)}.${month}.${day}`;
  }, [contents]);
  return (
    <Container isChild={isChild}>
      <CommentImageContainer>
        <Poster src={contents.member.profile} Style={imageStyle} />
      </CommentImageContainer>
      <CommentContentContainer>
        <CommentUserNickName>{contents.member.nickname}</CommentUserNickName>
        <CommentMessage>{contents.content}</CommentMessage>
        <CommentFooter>
          <Footer_Date>{makeDate()}</Footer_Date>
          <Footer_Like>
            <Poster src={contents?.liked ? liked : like} Style={iconStyle} />2
          </Footer_Like>
          <Footer_ChildCount>
            <Poster src={comment} Style={iconStyle2} />2
          </Footer_ChildCount>
          <Footer_More>
            <Poster src={more} Style={iconStyle3} />
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

export default PostDetailComment_Comment;
