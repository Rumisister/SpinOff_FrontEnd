import styled from 'styled-components';
import { ReactComponent as moreIcon } from '../../../assets/images/dotMore.svg';

const Container = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #f9cf00;
  padding-bottom: 5px;
  box-sizing: border-box;
`;

const PublicListAndCollectionList = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
`;
const CollectionListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  color: #111111;
`;
const MoreIconContainer = styled.div`
  margin-left: auto;
`;
const MoreIcon = styled(moreIcon)`
  cursor: pointer;
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

const normalButtonStyle2 = {
  width: '40px',
  height: '30px',
  borderRadius: '20px',
  border: '1px solid #F24860',
  color: 'white',
  background: '#F24860',
  fontWeight: 'bold',
  fontSize: '12px',
  hover: {
    color: '#F24860',
    background: 'white',
  },
};

export {
  Container,
  PublicListAndCollectionList,
  TitleContainer,
  Title,
  MoreIconContainer,
  MoreIcon,
  normalButtonStyle,
  CollectionListContainer,
  normalButtonStyle2,
};
