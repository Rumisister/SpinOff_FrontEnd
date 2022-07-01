import React, { useCallback, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeHashTags, changeInput } from '../../../store/Post/action';
import {
  CollectionList,
  CreatePostHasgTags,
  CreatePostPublicList,
  NewCollectionInfo,
  NewCollectionTitle,
} from '../../molecules';
import {
  Container,
  inputStyle,
  inputStyle2,
  MiddleContainer,
  TopContainer,
  Wrapper,
} from './styles';
function CreatePostRightSide() {
  const { postTitle, postContents, hashTags } = useSelector(
    state => ({
      postTitle: state.postReducer.createPostVO.title,
      postContents: state.postReducer.createPostVO.content,
      hashTags: state.postReducer.createPostVO.hashtagContents,
    }),
    shallowEqual,
  );
  console.log(process.env.REACT_APP_API_URL);
  const dispatch = useDispatch();
  // const [postTitle, setPostTitle] = useState('');
  // const [postContents, setPostContents] = useState('');
  // const [hashTags, setHashTags] = useState([]);
  const [newHashTag, setNewHashTag] = useState('');
  const tagID = useRef(0);
  const contentDispatch = obj => {
    dispatch(
      changeInput({
        ...obj,
      }),
    );
  };
  const onChangeTitle = useCallback(({ target }) => {
    if (target.value.length > 100) return;
    dispatch(
      changeInput({
        value: target.value,
        name: target.name,
      }),
    );
  }, []);
  const onChangeContents = useCallback(
    ({ target }) => {
      const regexp = /[A-Za-zㄱ-ㅎ가-힣_]/;
      const contents = target.value;
      const lastChar = contents[contents.length - 1];
      const deleteAction = postContents.length > contents.length;
      if (newHashTag !== '') {
        const tagIndex = contents.lastIndexOf('#');
        if (!deleteAction) {
          if (regexp.test(lastChar)) {
            setNewHashTag(contents.slice(tagIndex));
            contentDispatch({ value: contents, name: target.name });
          } else if (lastChar === ' ') {
            if (newHashTag !== '#') {
              dispatch(
                changeHashTags([
                  ...hashTags,
                  { id: tagID.current, title: newHashTag.slice(1) },
                ]),
              );
              tagID.current++;
            }
            contentDispatch({
              value: contents.slice(0, tagIndex),
              name: target.name,
            });
            setNewHashTag('');
          }
        } else {
          if (tagIndex === -1) setNewHashTag('');
          else setNewHashTag(contents.slice(tagIndex));
          contentDispatch({
            value: contents,
            name: target.name,
          });
        }
        return;
      }
      if (lastChar === '#') setNewHashTag('#');
      contentDispatch({
        value: contents,
        name: target.name,
      });
    },
    [postContents, hashTags, newHashTag],
  );

  return (
    <Container>
      <Wrapper>
        <TopContainer>
          <CreatePostPublicList isPost={true} />
          <CollectionList isPost={true} />
        </TopContainer>
        <MiddleContainer>
          <NewCollectionTitle
            name="title"
            value={postTitle}
            onChange={onChangeTitle}
            Style={inputStyle}
            placeholder="제목추가"
          />
          <NewCollectionInfo
            name="content"
            value={postContents}
            onChange={onChangeContents}
            Style={inputStyle2}
            placeholder="큐레이션 설명
본문에 #을 이용해 태그를 입력해보세요!(최대30개)"
          />
          <CreatePostHasgTags hashTags={hashTags} />
        </MiddleContainer>
      </Wrapper>
    </Container>
  );
}

export default CreatePostRightSide;
