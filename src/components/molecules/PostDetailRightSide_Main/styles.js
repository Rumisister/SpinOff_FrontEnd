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
  margin-bottom: 40px;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #f9cf00;
  }
`;
const Content = styled.div`
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
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
  font-size: 15px;
  line-height: 19px;
`;
const IconContainer = styled.div`
  margin-left: auto;
`;

const ExternalLink = styled(externalLink)`
  cursor: pointer;
`;
const ShareDM = styled(shareDM)`
  margin-right: 10px;
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
