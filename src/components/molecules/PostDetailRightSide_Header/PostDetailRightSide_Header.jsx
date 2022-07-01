import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NormalButton } from '../../atoms';
import {
  CollectionListContainer,
  Container,
  MoreIcon,
  MoreIconContainer,
  normalButtonStyle,
  normalButtonStyle2,
  PublicListAndCollectionList,
  Title,
  TitleContainer,
} from './styles';
import { axios } from '../../../api';
import CollectionList from '../CollectionList';
import { useSelector } from 'react-redux';

const publicRange = {
  A: '전체공개',
  B: '팔로잉',
  C: '비공개',
};
function PostDetailRightSide_Header({ contents }) {
  const postId = new URLSearchParams(useLocation().search).get('post_id');
  const [recommendedCollection, setRecommendedCollection] = useState({});
  const [saveType, setSaveType] = useState('one');
  const collectionIds = useSelector(
    state => state.postReducer.createPostVO.collectionIds,
  );
  useEffect(() => {
    let componentMounted = true;
    const reqeustInfo = async () => {
      try {
        const {
          data: { data },
        } = await axios({
          method: 'get',
          url: `/api/post/${postId}/collection/one`,
        });

        if (componentMounted) setRecommendedCollection({ ...data });
      } catch (error) {
        console.log(error);
      }
    };
    reqeustInfo();
    return () => {
      componentMounted = false;
    };
  }, []);
  const requestModifyCollectionAll = async () => {
    console.log(collectionIds);
    try {
      await axios({
        method: 'put',
        url: `
        /api/post/${postId}/collection/all`,
        data: {
          collectionIds,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const requestModifyCollectionOne = async () => {
    try {
      await axios({
        method: 'post',
        url: `/api/post/${postId}/collection/one`,
        data: {
          collectionId: recommendedCollection.id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onClickSaveAll = () => {
    console.log('all');
    requestModifyCollectionAll();
  };
  const onClickSaveOne = () => {
    console.log('one');
    requestModifyCollectionOne();
  };
  return (
    <Container>
      <PublicListAndCollectionList>
        <NormalButton Style={normalButtonStyle}>
          {publicRange[contents?.publicOfPostStatus]}
        </NormalButton>
        <CollectionListContainer>
          <CollectionList
            isPost={true}
            postId={postId}
            setSaveType={setSaveType}
          >
            {recommendedCollection.title}
          </CollectionList>
          <NormalButton
            Style={normalButtonStyle2}
            onClick={saveType === 'one' ? onClickSaveOne : onClickSaveAll}
          >
            저장
          </NormalButton>
        </CollectionListContainer>
      </PublicListAndCollectionList>
      <TitleContainer>
        <Title>{contents?.postTitle}</Title>
        <MoreIconContainer>
          <MoreIcon />
        </MoreIconContainer>
      </TitleContainer>
    </Container>
  );
}

PostDetailRightSide_Header.propTypes = {
  contents: propTypes.object,
};

export default PostDetailRightSide_Header;
