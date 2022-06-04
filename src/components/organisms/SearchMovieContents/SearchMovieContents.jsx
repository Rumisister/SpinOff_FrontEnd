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
import {
  LoadingState,
  SearchResultHashTags,
  SearchResultMainMovie,
} from '../../molecules';
import SearchMovieMasonry from '../SearchMovieMasonry';
const dummies = {
  firstMovie: {
    imageUrl:
      'https://image.hmall.com/static/1/9/95/25/2125959161_0.jpg?RS=600x600&AR=0',
    movieId: 0,
    thumbnails: [
      'http://cdn.lecturernews.com/news/photo/202105/66732_253774_3549.jpg',
      'https://i.ytimg.com/vi/GStrNgRS198/hqdefault.jpg',
      'https://blog.kakaocdn.net/dn/DSMGP/btqWBAqrRqf/qkz3r06BSdWrw7wPRgYKdK/img.jpg',
      'https://cdn.gukjenews.com/news/photo/201902/1066113_839279_3633.jpg',
      'http://ojsfile.ohmynews.com/STD_IMG_FILE/2013/1231/IE001662945_STD.jpg',
      'https://cdn.notefolio.net/img/d3/86/d386fedcb8b83734cdb2012b82b29db88fd8be57425c204cb05004a500280bc9_v1.jpg',
      'https://img.sbs.co.kr/newsnet/etv/upload/2013/12/13/30000341050.jpg',
      'http://cdn.lecturernews.com/news/photo/202105/66732_253774_3549.jpg',
      'https://i.ytimg.com/vi/GStrNgRS198/hqdefault.jpg',
    ],
    title: '어바웃 타임',
  },
  movies: [
    {
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8CNyXnVVCHwD74m1qee0t3XZvERa6721IQ&usqp=CAU',
      movieId: 0,
      title: '어바웃 타임',
    },
  ],
};
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
const SearchMovieContents = forwardRef(({ keyword }, ref) => {
  const { rootRef, targetRef } = ref.current;
  const [movie, setMovie] = useState({});
  const [hashtags, setHashTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingRefCheck = useRef(null);
  const pageNum = useRef(0);
  const serverPageNum = useRef(0);
  const pageSize = useRef(18);
  const componentMounted = useRef(true);
  const requestMovieMore = useCallback(async () => {
    try {
      setIsLoading(true);
      isLoadingRefCheck.current = true;
      const res = await axios({
        method: 'get',
        url: `/api/search/movie/${keyword}`,
        data: null,
        params: {
          page: pageNum.current,
          size: pageSize.current,
        },
      });
      if (componentMounted.current) {
        console.log(res.data);
        setMovie(prev => ({
          ...prev,
          movies: [...prev.movies, ...res.data.data.content],
        }));
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

  const requestMovie = useCallback(async () => {
    try {
      setIsLoading(true);
      isLoadingRefCheck.current = true;
      console.log('트라이!!@@');
      const res = await axios({
        method: 'get',
        url: `/api/search/movie/${keyword}/first`,
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
        setMovie(prev => ({
          ...prev,
          firstMovie: { ...res.data.data.data.firstMovie },
          movies: [...res.data.data.data.movies.content],
        }));
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
        requestMovieMore();
      }
    }, []),
  });
  useEffect(() => {
    componentMounted.current = true;
    console.log('마운트 후 !!!');
    requestMovie();
    console.log('최초호출!!!!!!!');
    console.log(movie);
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
      <SearchResultMainMovie content={dummies.firstMovie} />
      <SearchMovieMasonry type={'moive'} contents={dummies} />
    </Container>
  );
});

SearchMovieContents.displayName = 'SearchMovieContents';
SearchMovieContents.propTypes = {
  keyword: propTypes.string,
};

export default SearchMovieContents;
