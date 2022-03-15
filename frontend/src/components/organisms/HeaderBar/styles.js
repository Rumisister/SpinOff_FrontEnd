import styled from 'styled-components';

const HeaderLeftContainer = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderRightContainer = styled.div`
  width: 25%;
  height: 100%;
  display: felx;
  align-items: center;
  justify-content: flex-end;
`;

const LogoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #000000;
`;

const buttonStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 0 50px',
  color: 'white',
  Hover: {
    fontSize: '24px',
  },
};
export {
  LogoContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  buttonStyle,
};
