import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 15%;
  user-select: none;
`;

const FindTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

const IDType = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  width: 50%;
  border: 1px solid #f9cf00;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: ${props => (props?.mode ? '#f9cf00' : '')};
`;

const PWType = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  width: 50%;
  border: 1px solid #f9cf00;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: ${props => (!props?.mode ? '#f9cf00' : '')};
`;

export { Container, FindTypeContainer, IDType, PWType };
