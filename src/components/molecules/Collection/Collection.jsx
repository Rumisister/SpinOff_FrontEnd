import React from 'react';
import propTypes from 'prop-types';
import { Poster } from '../../atoms';
import {
  All,
  CheckBox,
  CheckBoxContainer,
  CheckedBox,
  CollectionInfo,
  CollectionName,
  CollectionPublic,
  Container,
  Following,
  ImageContainer,
  posterStyle,
  Private,
} from './styles';
const publicStatus = {
  A: {
    title: '전체공개',
    icon: <All />,
  },
  B: {
    title: '비공개',
    icon: <Private />,
  },
  C: {
    title: '팔로잉',
    icon: <Following />,
  },
};
function Collection({ onClick, list }) {
  return (
    <Container onClick={() => onClick(list.id)} key={list.id}>
      <ImageContainer>
        <Poster src={list.url} Style={posterStyle} />
      </ImageContainer>
      <CollectionInfo>
        <CollectionName>{list.title}</CollectionName>
        <CollectionPublic>
          {publicStatus[list.publicOfCollectionStatus].icon}
          {publicStatus[list.publicOfCollectionStatus].title}
        </CollectionPublic>
      </CollectionInfo>
      <CheckBoxContainer>
        {list.checked ? <CheckedBox /> : <CheckBox />}
      </CheckBoxContainer>
    </Container>
  );
}

Collection.propTypes = {
  onClick: propTypes.func,
  list: propTypes.object,
};
export default React.memo(Collection);
