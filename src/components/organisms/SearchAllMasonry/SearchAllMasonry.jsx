import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import { Post, SearchResultAllCurator } from '../../molecules';

function SearchAllMasonry({ type, contents }) {
  //const [isLoading, setIsLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(0);
  //const [ImageLoadingCount, setImageLoadingCount] = useState(0);
  const ImageLoadingCount = useRef(0);
  const TotalImageCount = useRef(0);
  //const TotalImageCount = useRef(0);
  console.log(type);
  const ContainerRef = useRef();
  const throttler = useRef(null);
  const onResize = useCallback(() => {
    console.log(Math.floor((ContainerRef.current.clientWidth - 40) / 200));
    if (throttler.current) return;
    throttler.current = setTimeout(() => {
      reflowContents();
      throttler.current = null;
    }, 500);
  });

  const reflowContents = useCallback(() => {
    const h = ContainerRef.current.clientHeight;
    console.log('높이 @@@@@@@@@@@@@@@');
    console.log(h);
    const contents = ContainerRef.current.children;
    if (!contents.length) return;
    const contentCount = Math.floor(
      (ContainerRef.current.clientWidth - 40) / 200,
    );
    //console.log(contents);
    const imageHeight = [];
    const contentGap =
      contentCount > 1
        ? (ContainerRef.current.clientWidth - contentCount * 200 - 40) /
          (contentCount - 1)
        : 0;
    const contentWidth = 200 + contentGap;
    for (let i = 0; i < (contentCount < 1 ? 1 : contentCount); i++)
      imageHeight[i] = 0;
    Array.prototype.forEach.call(contents, content => {
      //console.log(content);
      const min = imageHeight.indexOf(Math.min(...imageHeight));
      const x = contentWidth * min + 20;
      const y = imageHeight[min];
      imageHeight[min] += content.clientHeight + 20;
      //console.log(imageHeight);
      //console.log(min);
      const s = content.getAttribute('style');
      const newPosition = `transform:translate(${x}px, ${y}px)`;
      if (s === newPosition) {
        //console.log('일치 미노아ㅓㅁ노ㅓ아ㅗㅁ너ㅏ오');
        //console.log(s);
        //console.log(newPosition);
        return;
      }
      //console.log(s);
      content.setAttribute('style', newPosition);
    });
    ContainerRef.current.setAttribute(
      'style',
      `height:${Math.max(...imageHeight)}px`,
    );
    const a = ContainerRef.current.clientHeight;
    console.log('높이 @@@@@@@@@@@@@@@');
    console.log(a);
  });
  const setOnLoad = useCallback(() => {
    ImageLoadingCount.current += 1;
    console.log(ImageLoadingCount.current);
    console.log(TotalImageCount.current);
    if (ImageLoadingCount.current === TotalImageCount.current)
      setImageLoaded(true);
    //setImageLoadingCount(prev => prev + 1);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', onResize);
    console.log('masonry 마운트');
    //let isComponentMounted = true;
    //setImageLoading(true);
    return () => {
      //isComponentMounted = false;
      window.removeEventListener('resize', onResize);
    };
  }, []);
  useEffect(() => {
    console.log('그림 추가 @#@#');
    console.log(contents.length);
    TotalImageCount.current = contents.reduce((acc, pos) => {
      if (pos.type !== 'curator') return acc + 1;
      return acc;
    }, 0);
    setImageLoading(true);
    setImageLoaded(false);
  }, [contents]);
  useEffect(() => {
    if (contents.length && imageLoaded) {
      console.log('이미지 로딩완료');
      setImageLoading(false);
    }
  }, [imageLoaded]);
  useLayoutEffect(() => {
    if (!imageLoading) reflowContents();
  }, [imageLoading]);
  return (
    <Container ref={ContainerRef}>
      {contents.map((content, idx) => {
        if (content.type !== 'curator') {
          return (
            <Post
              key={idx}
              type={content.type}
              poster={content.thumbnailUrl || content.imageUrl}
              title={content.title || content.postTitle}
              profile={content?.memberProfileImgUrl}
              subTitle={content.memberNickname}
              genre={content.genreOfMovieStatuses}
              onLoad={setOnLoad}
            />
          );
        } else {
          return <SearchResultAllCurator key={idx} content={content.content} />;
        }
      })}
    </Container>
  );
}
SearchAllMasonry.propTypes = {
  type: propTypes.string,
  contents: propTypes.array,
};
export default SearchAllMasonry;
