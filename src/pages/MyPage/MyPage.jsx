import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MyPageCollection,
  MyPageCuration,
  MyPageInfo,
} from '../../components/organisms';
import {
  CollectionButton,
  Container,
  CurationButton,
  CurationCollectionButtonContainer,
  CurationCollectionContainer,
} from './styles';

function MyPage() {
  console.log('마이페이지');
  const [contentType, setContentType] = useState('curation');
  const memberId = new URLSearchParams(useLocation().search).get('member_id');
  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const ref = useRef({ rootRef, targetRef });
  const ToggleContentType = useCallback(() => {
    setContentType(prev => {
      if (prev === 'curation') return 'collection';
      else return 'curation';
    });
  }, []);
  return (
    <Container ref={rootRef}>
      <MyPageInfo member_id={memberId} />
      <CurationCollectionContainer>
        <CurationCollectionButtonContainer>
          <CurationButton
            onClick={ToggleContentType}
            selected={contentType === 'curation'}
          >
            큐레이션
          </CurationButton>
          <CollectionButton
            onClick={ToggleContentType}
            selected={contentType === 'collection'}
          >
            컬렉션
          </CollectionButton>
        </CurationCollectionButtonContainer>
        {contentType === 'curation' ? (
          <MyPageCuration
            member_id={memberId}
            contentType={contentType}
            ref={ref}
          />
        ) : (
          <MyPageCollection
            member_id={memberId}
            contentType={contentType}
            ref={ref}
          />
        )}
      </CurationCollectionContainer>
      <div ref={targetRef} />
    </Container>
  );
}

export default MyPage;
