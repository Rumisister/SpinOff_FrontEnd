import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { NormalButton } from '../../atoms';
import {
  Container,
  normalButtonStyle,
  PublicList,
  PublicListsContainer,
} from './styles';
import { axios } from '../../../api';
import { useDispatch } from 'react-redux';
import { changePublic } from '../../../store/Post/action';
function CreatePostPublicList({ collectionPublic, isPost = false }) {
  const [open, setOpen] = useState(false);
  const [publicLists, setPublicLists] = useState([]);
  const [publicRange, setPublicRange] = useState('');
  const dispatch = useDispatch();
  const requestPublicList = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: '/api/collection/public-categories',
      });
      setPublicLists(prev => prev.concat(res.data));
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    requestPublicList();
  }, []);
  return (
    <Container>
      <NormalButton
        Style={normalButtonStyle}
        onClick={() => setOpen(prev => !prev)}
      >
        {publicRange || '전체공개'}
      </NormalButton>
      <PublicListsContainer>
        {open && (
          <>
            {publicLists.map(list => (
              <PublicList
                key={list.code}
                onClick={() => {
                  setPublicRange(list.title);
                  if (isPost) {
                    dispatch(changePublic(list.code));
                  } else collectionPublic(list.code);
                  setOpen(false);
                }}
              >
                {list.title}
              </PublicList>
            ))}
          </>
        )}
      </PublicListsContainer>
    </Container>
  );
}

CreatePostPublicList.propTypes = {
  collectionPublic: propTypes.func,
  isPost: propTypes.bool,
};

export default React.memo(CreatePostPublicList);
