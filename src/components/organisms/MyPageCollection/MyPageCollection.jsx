import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import propTypes from 'prop-types';
import { axios } from '../../../api';
import { Masonry } from '..';
import { Container } from './styles';
import useIntersectionObserver from '../../../Hooks/useIntersectionObserver';
import { LoadingState } from '../../molecules';

const MyPageCollection = forwardRef(({ member_id, contentType }, ref) => {
  const [curation, setCuration] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingRefCheck = useRef(null);
  const pageNum = useRef(0);
  const serverPageNum = useRef(0);
  const pageSize = useRef(5);
  const { rootRef, targetRef } = ref.current;
  const componentMounted = useRef(true);
  const requestCuration = useCallback(async () => {
    try {
      setIsLoading(true);
      isLoadingRefCheck.current = true;
      const res = await axios({
        method: 'get',
        url: `/api/member/${member_id}/collection`,
        data: null,
        params: {
          page: pageNum.current,
          size: pageSize.current,
        },
      });
      if (componentMounted.current) {
        console.log(res.data);
        setCuration(prev => [...prev, ...res.data.data.content]);
        if (!res.data.data.last) pageNum.current++;
        serverPageNum.current = res.data.data.number;
        console.log('서버한테 데이터 받은후 !!! 페이지');
        console.log(pageNum.current);
        console.log(serverPageNum.current);
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (componentMounted.current) setIsLoading(false);
      isLoadingRefCheck.current = false;
    }
  }, []);
  // const onInterSect = useCallback(
  //   ([{ isIntersecting }]) => {
  //     console.log('옵저버 isloading');
  //     console.log(isLoading);
  //     console.log('옵저버 intersection');
  //     console.log(isIntersecting);
  //     if (
  //       isIntersecting &&
  //       !isLoading &&
  //       masornyLoading &&
  //       pageNum.current > serverPageNum.current
  //     ) {
  //       console.log('옵저버에서 리퀘스트');
  //       requestCuration();
  //     }
  //   },
  //   [isLoading, requestCuration],
  // );

  useIntersectionObserver({
    root: rootRef.current,
    target: targetRef.current,
    onIntersect: useCallback(([{ isIntersecting }]) => {
      console.log('옵저버 isloading');
      //console.log(refLoading.current);
      console.log('옵저버 intersection');
      console.log(isIntersecting);
      if (
        isIntersecting &&
        !isLoadingRefCheck.current &&
        pageNum.current > serverPageNum.current
      ) {
        console.log('옵저버에서 리퀘스트');
        requestCuration();
      }
    }, []),
  });
  useEffect(() => {
    componentMounted.current = true;
    console.log('마운트 후 !!!');
    console.log(contentType);
    requestCuration();
    return () => {
      componentMounted.current = false;
    };
  }, []); //<Masonry contents={curation} />
  console.log(Masonry);
  return (
    <Container>
      <LoadingState show={isLoading} />
      <Masonry contents={curation} contentType={contentType} />
    </Container>
  );
});
MyPageCollection.displayName = 'MyPageCollection';
MyPageCollection.propTypes = {
  member_id: propTypes.number,
  contentType: propTypes.string,
};
export default MyPageCollection;
