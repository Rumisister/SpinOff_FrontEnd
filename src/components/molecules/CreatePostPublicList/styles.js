import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 30px;
`;
const PublicListsContainer = styled.div`
  position: absolute;
  width: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  top: 35px;
  left: -10px;
`;
const PublicList = styled.div`
  color: black;
  font-size: 12px;
  transition: 0.3s;
  text-align: center;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #f9cf00;
    transition: 0.3s;
    font-weight: bold;
  }
`;

const normalButtonStyle = {
  width: '60px',
  height: '30px',
  borderRadius: '20px',
  border: '1px solid #F24860',
  color: '#F24860',
  background: 'transparent',
  fontWeight: 'bold',
  fontSize: '12px',
  hover: {
    color: 'white',
    background: '#F24860',
  },
};

export { Container, PublicListsContainer, PublicList, normalButtonStyle };
