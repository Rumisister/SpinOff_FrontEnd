import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import propTypes from 'prop-types';
import { axios } from '../../../api';
import useIntersectionObserver from '../../../Hooks/useIntersectionObserver';
import { Container } from './styles';
import { LoadingState, SearchResultHashTags } from '../../molecules';
import SearchCuratorMasonry from '../SearchCuratorMasonry';
const dummies = [
  {
    accountId: 'gudehd231',
    bio: '감성 영화만 찾는사람',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberId: 0,
    nickname: '폴인럽',
    profileImg:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202102/15/b99a3e26-0ed3-4abe-b50d-8667fbaf4038.jpg',
    thumbnailUrls: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNjExMDhfMjA5/MDAxNDc4NTkwNTg1NjM5.5hOGA5ZNRXkFc4J3Lzn_19r5FwyNYMHqDyavJP4jt94g.N4nrWXvYdpG_3FI52n46wSe0C47Y2ssLcatYFLukERAg.JPEG.villa-seedae/villa-seedae_%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0_002.jpg?type=w800',
      'http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1123/IE001775801_STD.jpg',
      'http://t1.daumcdn.net/movie/d428a403ecd7e344a2b4451b71efc2d5ba8e1067',
      'https://img.huffingtonpost.com/asset/5d8122513b0000039fd610fa.jpeg?ops=scalefit_630_noupscale',
    ],
  },
  {
    accountId: 'gudehd231',
    bio: '감성 영화만 찾는사람',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberId: 1,
    nickname: '폴인럽',
    profileImg:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202102/15/b99a3e26-0ed3-4abe-b50d-8667fbaf4038.jpg',
    thumbnailUrls: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNjExMDhfMjA5/MDAxNDc4NTkwNTg1NjM5.5hOGA5ZNRXkFc4J3Lzn_19r5FwyNYMHqDyavJP4jt94g.N4nrWXvYdpG_3FI52n46wSe0C47Y2ssLcatYFLukERAg.JPEG.villa-seedae/villa-seedae_%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0_002.jpg?type=w800',
      'http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1123/IE001775801_STD.jpg',
      'http://t1.daumcdn.net/movie/d428a403ecd7e344a2b4451b71efc2d5ba8e1067',
      'https://img.huffingtonpost.com/asset/5d8122513b0000039fd610fa.jpeg?ops=scalefit_630_noupscale',
    ],
  },
  {
    accountId: 'gudehd231',
    bio: '감성 영화만 찾는사람',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberId: 2,
    nickname: '폴인럽',
    profileImg:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202102/15/b99a3e26-0ed3-4abe-b50d-8667fbaf4038.jpg',
    thumbnailUrls: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNjExMDhfMjA5/MDAxNDc4NTkwNTg1NjM5.5hOGA5ZNRXkFc4J3Lzn_19r5FwyNYMHqDyavJP4jt94g.N4nrWXvYdpG_3FI52n46wSe0C47Y2ssLcatYFLukERAg.JPEG.villa-seedae/villa-seedae_%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0_002.jpg?type=w800',
      'http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1123/IE001775801_STD.jpg',
      'http://t1.daumcdn.net/movie/d428a403ecd7e344a2b4451b71efc2d5ba8e1067',
      'https://img.huffingtonpost.com/asset/5d8122513b0000039fd610fa.jpeg?ops=scalefit_630_noupscale',
    ],
  },
  {
    accountId: 'gudehd231',
    bio: '감성 영화만 찾는사람',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberId: 3,
    nickname: '폴인럽',
    profileImg:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202102/15/b99a3e26-0ed3-4abe-b50d-8667fbaf4038.jpg',
    thumbnailUrls: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNjExMDhfMjA5/MDAxNDc4NTkwNTg1NjM5.5hOGA5ZNRXkFc4J3Lzn_19r5FwyNYMHqDyavJP4jt94g.N4nrWXvYdpG_3FI52n46wSe0C47Y2ssLcatYFLukERAg.JPEG.villa-seedae/villa-seedae_%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0_002.jpg?type=w800',
      'http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1123/IE001775801_STD.jpg',
      'http://t1.daumcdn.net/movie/d428a403ecd7e344a2b4451b71efc2d5ba8e1067',
      'https://img.huffingtonpost.com/asset/5d8122513b0000039fd610fa.jpeg?ops=scalefit_630_noupscale',
    ],
  },
  {
    accountId: 'gudehd231',
    bio: '감성 영화만 찾는사람',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberId: 4,
    nickname: '폴인럽',
    profileImg:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202102/15/b99a3e26-0ed3-4abe-b50d-8667fbaf4038.jpg',
    thumbnailUrls: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNjExMDhfMjA5/MDAxNDc4NTkwNTg1NjM5.5hOGA5ZNRXkFc4J3Lzn_19r5FwyNYMHqDyavJP4jt94g.N4nrWXvYdpG_3FI52n46wSe0C47Y2ssLcatYFLukERAg.JPEG.villa-seedae/villa-seedae_%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0_002.jpg?type=w800',
      'http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1123/IE001775801_STD.jpg',
      'http://t1.daumcdn.net/movie/d428a403ecd7e344a2b4451b71efc2d5ba8e1067',
      'https://img.huffingtonpost.com/asset/5d8122513b0000039fd610fa.jpeg?ops=scalefit_630_noupscale',
    ],
  },
  {
    accountId: 'gudehd231',
    bio: '감성 영화만 찾는사람',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberId: 5,
    nickname: '폴인럽',
    profileImg:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202102/15/b99a3e26-0ed3-4abe-b50d-8667fbaf4038.jpg',
    thumbnailUrls: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNjExMDhfMjA5/MDAxNDc4NTkwNTg1NjM5.5hOGA5ZNRXkFc4J3Lzn_19r5FwyNYMHqDyavJP4jt94g.N4nrWXvYdpG_3FI52n46wSe0C47Y2ssLcatYFLukERAg.JPEG.villa-seedae/villa-seedae_%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0_002.jpg?type=w800',
      'http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1123/IE001775801_STD.jpg',
      'http://t1.daumcdn.net/movie/d428a403ecd7e344a2b4451b71efc2d5ba8e1067',
      'https://img.huffingtonpost.com/asset/5d8122513b0000039fd610fa.jpeg?ops=scalefit_630_noupscale',
    ],
  },
  {
    accountId: 'gudehd231',
    bio: '감성 영화만 찾는사람',
    followingCount: 100,
    followingMemberNickname: '마블링',
    memberId: 6,
    nickname: '폴인럽',
    profileImg:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202102/15/b99a3e26-0ed3-4abe-b50d-8667fbaf4038.jpg',
    thumbnailUrls: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNjExMDhfMjA5/MDAxNDc4NTkwNTg1NjM5.5hOGA5ZNRXkFc4J3Lzn_19r5FwyNYMHqDyavJP4jt94g.N4nrWXvYdpG_3FI52n46wSe0C47Y2ssLcatYFLukERAg.JPEG.villa-seedae/villa-seedae_%EC%9D%B8%ED%84%B0%EC%8A%A4%ED%85%94%EB%9D%BC_%ED%8F%AC%EC%8A%A4%ED%84%B0_002.jpg?type=w800',
      'http://ojsfile.ohmynews.com/STD_IMG_FILE/2014/1123/IE001775801_STD.jpg',
      'http://t1.daumcdn.net/movie/d428a403ecd7e344a2b4451b71efc2d5ba8e1067',
      'https://img.huffingtonpost.com/asset/5d8122513b0000039fd610fa.jpeg?ops=scalefit_630_noupscale',
    ],
  },
];
const dummyTags = [
  {
    content: '레이첼 맥아담스',
    id: 0,
  },
  {
    content: '로맨스',
    id: 1,
  },
  {
    content: '라이언 고슬링',
    id: 2,
  },
  {
    content: '포스터',
    id: 3,
  },
  {
    content: '결혼식',
    id: 4,
  },
  {
    content: '힐링 영화',
    id: 5,
  },
];
const SearchCuratorContents = forwardRef(({ keyword }, ref) => {
  const { rootRef, targetRef } = ref.current;
  const [curator, setCurator] = useState([]);
  const [hashtags, setHashTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingRefCheck = useRef(null);
  const pageNum = useRef(0);
  const serverPageNum = useRef(0);
  const pageSize = useRef(6);
  const componentMounted = useRef(true);
  const requestCuratorMore = useCallback(async () => {
    try {
      setIsLoading(true);
      isLoadingRefCheck.current = true;
      const res = await axios({
        method: 'get',
        url: `/api/search/member/${keyword}`,
        data: null,
        params: {
          page: pageNum.current,
          size: pageSize.current,
        },
      });
      if (componentMounted.current) {
        console.log(res.data);
        console.log('최초호출!!!!!!!');
        setCurator(prev => [...prev, ...res.data.data.content]);
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

  const requestCurator = useCallback(async () => {
    try {
      setIsLoading(true);
      isLoadingRefCheck.current = true;
      console.log('트라이!!@@');
      const res = await axios({
        method: 'get',
        url: `/api/search/member/${keyword}/first`,
        data: null,
        params: {
          page: pageNum.current,
          size: pageSize.current,
          length: 10,
        },
      });
      if (componentMounted.current) {
        console.log(res);
        console.log('최초호출!!!!!!!');
        setCurator(prev => [...prev, ...res.data.data.data.content]);
        setHashTags(prev => [...prev, ...res.data.data.hashtags]);
        if (!res.data.data.data.last) pageNum.current++;
        serverPageNum.current = res.data.data.data.number;
        console.log('서버한테 데이터 받은후 !!! 페이지');
        console.log(pageNum.current);
        console.log(serverPageNum.current);
      }
    } catch (error) {
      console.log('에러 발생@#@#@#');
      console.log(error);
    } finally {
      if (componentMounted.current) setIsLoading(false);
      isLoadingRefCheck.current = false;
    }
  }, []);
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
        requestCuratorMore();
      }
    }, []),
  });
  useEffect(() => {
    componentMounted.current = true;
    console.log('마운트 후 !!!');
    requestCurator();
    console.log('최초호출!!!!!!!');
    console.log(curator);
    return () => {
      componentMounted.current = false;
    };
  }, []);
  console.log(hashtags);
  console.log(dummyTags);
  return (
    <Container>
      <LoadingState show={isLoading} />
      <SearchResultHashTags contents={dummyTags} />
      <SearchCuratorMasonry type={'curator'} contents={dummies} />
    </Container>
  );
});

SearchCuratorContents.displayName = 'SearchCollectionContents';
SearchCuratorContents.propTypes = {
  keyword: propTypes.string,
};

export default SearchCuratorContents;
