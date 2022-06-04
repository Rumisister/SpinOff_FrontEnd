import styled from 'styled-components';

const RelatedContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  width: 100%;
  color: white;
  &:hover {
    font-weight: bold;
    background: #2800ee;
  }
`;
const RelatedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
const RelatedTitle = styled.div`
  margin-left: 30px;
  flex: 1;
`;

const posterStyle = {
  width: '30px',
  height: '30px',
  objectFit: 'cover',
  borderRadius: '20px',
  textIndent: ' -9999px',
};

export { RelatedContainer, RelatedTitle, RelatedIcon, posterStyle };
