import styled from 'styled-components';
import { ReactComponent as externalLink } from '../../../assets/images/externalLink.svg';
import { ReactComponent as shareDM } from '../../../assets/images/shareDM.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  box-sizing: border-box;
`;
const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  margin-bottom: 2.5rem;
  &::-webkit-scrollbar {
    width: 0.4375rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background: #f9cf00;
  }
`;
const Content = styled.div`
  padding: 0.625rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2.1875rem;
  box-sizing: border-box;
`;

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Date = styled.div`
  color: #6c6767;
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 1.1875rem;
`;
const IconContainer = styled.div`
  margin-left: auto;
`;

const ExternalLink = styled(externalLink)`
  cursor: pointer;
`;
const ShareDM = styled(shareDM)`
  margin-right: 0.625rem;
  cursor: pointer;
`;

export {
  Container,
  ContentContainer,
  Content,
  DateContainer,
  Date,
  IconContainer,
  ExternalLink,
  ShareDM,
};
