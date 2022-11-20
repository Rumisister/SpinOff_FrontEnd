import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-left: ${props => (props?.isChild ? '40px' : 0)};
  margin-bottom: 20px;
`;
const CommentImageContainer = styled.div``;
const CommentContentContainer = styled.div``;
const CommentUserNickName = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
`;
const CommentMessage = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  margin: 5px 0;
`;
const CommentFooter = styled.div``;
const Footer_Date = styled.div``;
const Footer_Like = styled.div``;
const Footer_ChildCount = styled.div``;
const Footer_More = styled.div``;
const imageStlye = {
  width: '40px',
  height: '40px',
};
export {
  Container,
  CommentContentContainer,
  CommentFooter,
  CommentImageContainer,
  CommentMessage,
  CommentUserNickName,
  imageStlye,
  Footer_Date,
  Footer_Like,
  Footer_More,
  Footer_ChildCount,
};
