import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 55%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const NameContainer = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;
const MessageContainer = styled.div`
  font-size: 20px;
  width: 90%;
  color: #f9cf00;
  margin-top: 20px;
`;
const RelatedContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;
  color: white;
`;
const EachTypeContainer = styled.div`
  cursor: pointer;
`;

const RelatedType = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;
const RelatedValue = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
`;

export {
  Container,
  NameContainer,
  MessageContainer,
  RelatedContainer,
  EachTypeContainer,
  RelatedType,
  RelatedValue,
};
