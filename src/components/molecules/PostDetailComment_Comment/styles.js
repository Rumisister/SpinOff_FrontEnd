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
  margin: 5px 0;
`;
const CommentFooter = styled.div`
  display: flex;
  align-items: center;
`;
const Footer_Date = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  margin-right: 15px;
`;
const Footer_Like = styled.div`
  display: flex;
  align-items: center;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  margin-right: 10px;
  cursor: pointer;
`;
const Footer_ChildCount = styled.div`
  display: flex;
  align-items: center;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  margin-right: 10px;
  cursor: pointer;
`;
const Footer_More = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const imageStyle = {
  width: '40px',
  height: '40px',
};
const iconStyle = {
  width: '10px',
  height: '9px',
  margin: '0 3px 0 0',
};
const iconStyle2 = {
  width: '13px',
  height: '13px',
  margin: '0 3px 0 0',
};
const iconStyle3 = {
  width: '12px',
  height: '12px',
  margin: '0 3px 0 0',
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
