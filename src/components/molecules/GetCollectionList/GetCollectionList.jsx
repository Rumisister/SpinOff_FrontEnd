import React, { useCallback, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Input } from '../../atoms';
import { Collection } from '..';
import {
  AddCollectionButton,
  AddCollectionContainer,
  AddIcon,
  CollectionLists,
  Container,
  IconContainer,
  InputContainer,
  inputStyle,
  Magnifier,
  SearchContainer,
} from './styles';
import { axios } from '../../../api';
import { useDispatch, useSelector } from 'react-redux';
import { changeCollection } from '../../../store/Post/action';

const temp = [
  {
    id: 0,
    title: '어바웃타임',
    publicOfCollectionStatus: 'A',
    checked: false,
    url: 'data:image/jpeg;base64,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',
  },
  {
    id: 1,
    title: '스파이더맨:노웨어홈',
    publicOfCollectionStatus: 'B',
    checked: false,
    url: 'http://kiramonthly.com/wp-content/uploads/2020/02/1.jpg',
  },
  {
    id: 2,
    title: '터널',
    publicOfCollectionStatus: 'C',
    checked: false,
    url: 'https://cdn.imweb.me/upload/S20200515cfb40c92647b4/e27e419b2691f.jpg',
  },
  {
    id: 3,
    title: '나는 내일 어제의 너와 만난다',
    publicOfCollectionStatus: 'A',
    checked: false,
    url: 'http://shoplife25.imghost.cafe24.com/puzzle/40000002.jpg',
  },
];

function GetCollectionList({ setNewOpen, isPost = false }) {
  const [collectionList, setCollectionList] = useState([...temp]);
  const collectionIds = useSelector(
    state => state.postReducer.createPostVO.collectionIds,
  );
  const dispatch = useDispatch();
  const toggleCheck = useCallback(
    id => {
      setCollectionList(prev =>
        prev.map(list => {
          if (list.id === id) {
            if (isPost) {
              if (!list.checked) {
                dispatch(changeCollection([...collectionIds, list.id]));
              } else {
                dispatch(
                  changeCollection([
                    ...collectionIds.filter(cid => cid !== list.id),
                  ]),
                );
              }
            }
            return {
              ...list,
              checked: !list.checked,
            };
          } else {
            return list;
          }
        }),
      );
    },
    [collectionIds],
  );
  const requestCollectionList = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: '/api/collection/all',
      });
      console.log(res.data);
      setCollectionList([...res.data.data]);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(requestCollectionList);
  useEffect(() => {
    requestCollectionList();
  }, []);
  return (
    <Container>
      <SearchContainer>
        <IconContainer>
          <Magnifier />
        </IconContainer>
        <InputContainer>
          <Input Style={inputStyle} placeholder="컬렉션 검색" />
        </InputContainer>
      </SearchContainer>
      <CollectionLists>
        {collectionList.map(list => (
          <Collection key={list.id} onClick={toggleCheck} list={list} />
        ))}
      </CollectionLists>
      <AddCollectionContainer>
        <AddCollectionButton onClick={() => setNewOpen(true)}>
          <AddIcon />새 컬렉션 만들기
        </AddCollectionButton>
      </AddCollectionContainer>
    </Container>
  );
}
GetCollectionList.propTypes = {
  setNewOpen: propTypes.func,
  isPost: propTypes.bool,
};

export default GetCollectionList;
