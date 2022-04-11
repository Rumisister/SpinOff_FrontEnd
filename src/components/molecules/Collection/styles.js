import styled from 'styled-components';
import { ReactComponent as all } from '../../../assets/images/all.svg';
import { ReactComponent as secret } from '../../../assets/images/private.svg';
import { ReactComponent as following } from '../../../assets/images/following.svg';
import { ReactComponent as check } from '../../../assets/images/checkBox.svg';

const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  height: 60px;
  transition: 0.3s;
  &:hover {
    background: #f9cf00;
    transition: 0.3s;
  }
`;

const CollectionInfo = styled.div`
  height: 100%;
  width: 180px;
  margin-left: 15px;
`;
const CollectionName = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  line-height: 1;
  text-align: left;
  height: 50%;
`;
const CollectionPublic = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  font-size: 12px;
  font-weight: bold;
  color: #f24860;
`;

const ImageContainer = styled.div`
  margin-left: 20px;
  width: 60px;
  height: 100%;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;
const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid #f24860;
  background: white;
`;

const CheckedBox = styled(check)`
  width: 15px;
  height: 15px;
`;

const All = styled(all)`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;
const Private = styled(secret)`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;
const Following = styled(following)`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;

const posterStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  verticalAlign: 'middle',
  borderRadius: '15%',
};

export {
  Container,
  ImageContainer,
  posterStyle,
  CollectionInfo,
  CollectionName,
  CollectionPublic,
  CheckBoxContainer,
  All,
  Private,
  Following,
  CheckBox,
  CheckedBox,
};
