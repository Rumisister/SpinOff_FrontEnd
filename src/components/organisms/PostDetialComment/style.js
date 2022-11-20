import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 47%;
  width: 53%;
  height: 100%;
  z-index: -1;
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  transform: ${props => props?.active && 'translateX(95%)'};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  padding: 20px 20px 20px 30px;
  box-sizing: border-box;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
`;

const CommentCountContainer = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const CommentCount = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  margin-left: 5px;
  color: #6c6767;
`;
const CommnetContainer = styled.div`
  flex: 1;
  overflow: auto;
`;
export { Container, CommentCountContainer, CommentCount, CommnetContainer };
