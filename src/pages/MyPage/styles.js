import styled from 'styled-components';

const Container = styled.div`
  height: calc(100% - 149px);
  margin-top: 149px;
  overflow: auto;
`;

const CurationCollectionContainer = styled.div`
  width: 100%;
`;
const CurationCollectionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  user-select: none;
`;

const CurationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props => (props?.selected ? '3px solid #f24860' : '0')};
  padding: 10px 0;
  margin-right: 10px;
  width: 200px;
  box-sizing: border-box;
  color: ${props => (props?.selected ? '#f24860' : 'black')};
  cursor: pointer;
`;
const CollectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props => (props?.selected ? '3px solid #f24860' : '0')};
  padding: 10px 0;
  margin-left: 10px;
  width: 200px;
  box-sizing: border-box;
  color: ${props => (props?.selected ? '#f24860' : 'black')};
  cursor: pointer;
`;
export {
  Container,
  CurationCollectionContainer,
  CurationCollectionButtonContainer,
  CurationButton,
  CollectionButton,
};
