import styled from 'styled-components';

const Common = styled.div`
  position: fixed;
  left: max(50%, 500px);
  width: 50%;
  min-width: 500px;
  margin-left: min(-25%, -250px);
`;
const Container = styled(Common)`
  //display: ${props => (props.focused ? '' : 'none')};
  /* visibility: ${props => (props?.focused ? 'visible' : 'hidden')};
  opacity: ${props => (props?.focused ? '1' : '0')}; */
  transition: 0.3s;
  top: 148px;
  max-height: 580px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: rgba(32, 32, 32, 0.9);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: rgba(32, 32, 32, 0.9);
    background-clip: padding-box;
    border: 2px solid transparent;
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }
`;
const Contents = styled.div`
  padding: 30px;
  user-select: none;
`;

export { Container, Contents };
