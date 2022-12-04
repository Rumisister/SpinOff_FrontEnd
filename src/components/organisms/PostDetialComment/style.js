import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 48%;
  width: 53%;
  height: 100%;
  z-index: -1;
  box-shadow: 0rem 0.25rem 0.625rem 0.625rem rgba(0, 0, 0, 0.25);
  transform: ${props => props?.active && 'translateX(95%)'};
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  padding: 1.25rem 1.25rem 1.25rem 1.875rem;
  box-sizing: border-box;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
`;

const CommentCountContainer = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.1875rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const CommentCount = styled.span`
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 1.1875rem;
  margin-left: 0.3125rem;
  color: #6c6767;
`;
const CommnetContainer = styled.div`
  flex: 1;
  overflow: auto;
  border-bottom: 0.0625rem solid #f9cf00;
`;
const AddCommentContainer = styled.div`
  width: 23.5rem;
  height: 3.1875rem;
  display: flex;
  align-items: center;
`;
export {
  Container,
  CommentCountContainer,
  CommentCount,
  CommnetContainer,
  AddCommentContainer,
};
