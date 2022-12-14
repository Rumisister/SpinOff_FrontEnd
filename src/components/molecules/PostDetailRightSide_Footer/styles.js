import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  flex: 1;
  user-select: none;
`;

const CuratorNameFollowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60%;
`;
const LikeCommentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
`;
const Like = styled.div`
  font-weight: 600;
  font-size: 0.9375rem;
  color: #888888;
  margin-right: 0.625rem;
  cursor: pointer;
`;
const Comment = styled.div`
  font-weight: 600;
  font-size: 0.9375rem;
  color: #888888;
  cursor: pointer;
`;
const CommentMore = styled.div`
  font-weight: 700;
  font-size: 0.9375rem;
  color: #585858;
  margin-left: auto;
  cursor: pointer;
`;

const CuratorContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5625rem;
  width: 100%;
`;

const imgStyle = {
  width: '3.125rem',
  height: '3.125rem',
  borderRadius: '3.125rem',
  margin: '0 .3125rem 0 0',
};
const imgStyle2 = {
  widht: '.625rem',
  height: '.625rem',
  margin: '0 .3125rem 0 0',
};
const imgStyle3 = {
  widht: '.75rem',
  height: '.75rem',
  margin: '0 0 0 .3125rem',
};
const commonButtonStyle = {
  margin: '0 0 0 auto',
  borderRadius: '.9375rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '.3125rem .625rem',
};
const buttonStyle = {
  ...commonButtonStyle,
  background: '#F24860',
  color: 'white',
};
const buttonStyle2 = {
  ...commonButtonStyle,
  background: 'white',
  color: '#F24860',
};
export {
  Container,
  CuratorNameFollowContainer,
  LikeCommentContainer,
  CuratorContainer,
  imgStyle,
  buttonStyle,
  buttonStyle2,
  imgStyle2,
  Like,
  Comment,
  CommentMore,
  imgStyle3,
};
