import React, { useCallback, useState } from 'react';
import { NormalButton, Poster, TextArea } from '../../atoms';
import {
  Container,
  imgStyle,
  normalButtonStyle,
  TextAreaContainer,
  textAreaStyle,
} from './styles';
import propTypes from 'prop-types';
import defaultProfile from '../../../assets/images/baseProfile.png';
function PostDetailComment_AddComment({ requestAddComment }) {
  console.log(requestAddComment);
  const [comment, setComment] = useState('');
  const onChangeComment = useCallback(
    e => {
      if (e.target.value.length <= 300) setComment(e.target.value);
    },
    [comment],
  );
  const requestAddComment_AndReqsetInput = useCallback(() => {
    requestAddComment(comment);
    setComment('');
  }, [comment]);
  return (
    <Container>
      <Poster src={defaultProfile} Style={imgStyle} />
      <TextAreaContainer>
        <TextArea
          value={comment}
          onChange={onChangeComment}
          Style={textAreaStyle}
          placeholder={'댓글 달기...'}
        />
      </TextAreaContainer>
      <NormalButton
        Style={normalButtonStyle}
        onClick={requestAddComment_AndReqsetInput}
      >
        완료
      </NormalButton>
    </Container>
  );
}
PostDetailComment_AddComment.propTypes = {
  requestAddComment: propTypes.func,
};
export default React.memo(PostDetailComment_AddComment);
