import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: -1;
  padding: 20px 20px 20px 10px;
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  height: 65%;
  border-bottom: 1px solid #f9cf00;
  flex: 1;
`;

const inputStyle2 = {
  fontSize: '16px',
  padding: '10px 0',
  width: '100%',
  height: '100%',
  backGround: 'transparent',
  placeholder: {
    color: 'rgba(17, 17, 17, 0.3)',
  },
};

const inputStyle = {
  fontSize: '30px',
  padding: '5px 0',
  width: '100%',
  height: '100%',
  backGround: 'transparent',
  placeholder: {
    fontWeight: 'bold',
  },
};

export {
  Container,
  TopContainer,
  MiddleContainer,
  inputStyle,
  inputStyle2,
  Wrapper,
};
