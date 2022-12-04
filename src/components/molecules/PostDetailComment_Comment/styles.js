import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-left: ${props => (props?.isChild ? '2.5rem' : 0)};
  margin-bottom: 1.25rem;
`;
const CommentImageContainer = styled.div``;
const CommentContentContainer = styled.div``;
const CommentUserNickName = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.125rem;
`;
const CommentMessage = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 0.9375rem;
  margin: 0.3125rem 0;
`;
const CommentFooter = styled.div`
  display: flex;
  align-items: center;
`;
const Footer_Date = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 0.6875rem;
  margin-right: 0.9375rem;
`;
const Footer_Like = styled.div`
  display: flex;
  align-items: center;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 0.8125rem;
  margin-right: 0.625rem;
  cursor: pointer;
`;
const Footer_ChildCount = styled.div`
  display: flex;
  align-items: center;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 0.8125rem;
  margin-right: 0.625rem;
  cursor: pointer;
`;
const Footer_More = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const imageStyle = {
  width: '2.5rem',
  height: '2.5rem',
};
const iconStyle = {
  width: '0.625rem',
  height: '0.5625rem',
  margin: '0 0.1875rem 0 0',
};
const iconStyle2 = {
  width: '0.8125rem',
  height: '0.8125rem',
  margin: '0 0.1875rem 0 0',
};
const iconStyle3 = {
  width: '0.75rem',
  height: '0.75rem',
  margin: '0 0.1875rem 0 0',
};
export {
  Container,
  CommentContentContainer,
  CommentFooter,
  CommentImageContainer,
  CommentMessage,
  CommentUserNickName,
  imageStyle,
  Footer_Date,
  Footer_Like,
  Footer_More,
  Footer_ChildCount,
  iconStyle,
  iconStyle2,
  iconStyle3,
};
