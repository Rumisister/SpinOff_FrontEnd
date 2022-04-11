import React, { useCallback, useState } from 'react';
import propTypes from 'prop-types';
import {
  NewCollectionTitle,
  CreatePostPublicList,
  NewCollectionInfo,
} from '..';
import { axios } from '../../../api';
import {
  BottomContainer,
  CollectionLogo,
  Complete,
  Container,
  inputStyle,
  inputStyle2,
  MiddleContainer,
  TopContainer,
} from './styles';

function NewCollection({ setNewOpen }) {
  const [collectionName, setCollectionName] = useState('');
  const [collectionInfo, setCollectionInfo] = useState('');
  const [collectionPublic, setCollectionPublic] = useState('A');
  const onChangeCollectionName = useCallback(({ target }) => {
    if (target.value.length > 100) return;
    setCollectionName(target.value);
  });
  const onChangeCollectionInfo = useCallback(({ target }) => {
    if (target.value.length > 500) return;
    setCollectionInfo(target.value);
  });
  const requestCollection = async () => {
    try {
      const res = await axios({
        method: 'post',
        url: '/api/collection',
        data: {
          content: collectionInfo,
          publicOfCollectionStatus: collectionPublic,
          title: collectionName,
        },
      });
      console.log(res);
      setNewOpen(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  const onRequestCollection = () => {
    requestCollection();
  };
  return (
    <Container>
      <TopContainer>
        <CollectionLogo />
        <CreatePostPublicList collectionPublic={setCollectionPublic} />
      </TopContainer>
      <MiddleContainer>
        <NewCollectionTitle
          value={collectionName}
          onChange={onChangeCollectionName}
          inputStyle={inputStyle}
          placeholder="컬렉션 이름"
        />
        <NewCollectionInfo
          value={collectionInfo}
          onChange={onChangeCollectionInfo}
          inputStyle={inputStyle2}
          placeholder="컬렉션에 대해 설명해주세요"
        />
      </MiddleContainer>
      <BottomContainer>
        <Complete onClick={onRequestCollection} />
      </BottomContainer>
    </Container>
  );
}

NewCollection.propTypes = {
  setNewOpen: propTypes.func,
};

export default NewCollection;
