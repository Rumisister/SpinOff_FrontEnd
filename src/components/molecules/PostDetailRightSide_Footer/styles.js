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
  font-size: 15px;
  color: #888888;
  margin-right: 10px;
  cursor: pointer;
`;
const Comment = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: #888888;
  cursor: pointer;
`;
const CommentMore = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #585858;
  margin-left: auto;
  cursor: pointer;
`;

const CuratorContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  width: 100%;
`;

const imgStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50px',
  margin: '0 5px 0 0',
};
const imgStyle2 = {
  widht: '10px',
  height: '10px',
  margin: '0 5px 0 0',
};
const imgStyle3 = {
  widht: '12px',
  height: '12px',
  margin: '0 0 0 5px',
};
const commonButtonStyle = {
  margin: '0 0 0 auto',
  borderRadius: '15px',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '5px 10px',
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
