import React, { useCallback, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';
import { SearchResultCollection } from '../../molecules';

function SearchCollectionMasonry({ type, contents }) {
  //const [isLoading, setIsLoading] = useState(true);
  //const [imageLoading, setImageLoading] = useState(true);
  //const [imageLoaded, setImageLoaded] = useState(0);
  //const [ImageLoadingCount, setImageLoadingCount] = useState(0);
  //const ImageLoadingCount = useRef(0);
  //const TotalImageCount = useRef(0);
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
    const defaultWidth = type === 'all' ? 300 : 400;
    console.log('높이 @@@@@@@@@@@@@@@');
    console.log(h);
    const contents = ContainerRef.current.children;
    if (!contents.length) return;
    const contentCount = Math.floor(
      (ContainerRef.current.clientWidth - 120) / defaultWidth,
    );
    //console.log(contents);
    const imageHeight = [];
    const contentGap =
      contentCount > 1
        ? (ContainerRef.current.clientWidth -
            contentCount * defaultWidth -
            120) /
          (contentCount - 1)
        : 0;
    const contentWidth = defaultWidth + contentGap;
    for (let i = 0; i < (contentCount < 1 ? 1 : contentCount); i++)
      imageHeight[i] = 0;
    Array.prototype.forEach.call(contents, content => {
      //console.log(content);
      const min = imageHeight.indexOf(Math.min(...imageHeight));
      const x = contentWidth * min + 60;
      const y = imageHeight[min];
      imageHeight[min] += content.clientHeight + 60;
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
    //setImageLoading(true);
    reflowContents();
  }, [contents]);
  //   useEffect(() => {
  //     if (contents.length && imageLoaded) {
  //       console.log('이미지 로딩완료');
  //       setImageLoading(false);
  //     }
  //   }, [imageLoaded]);
  //   useLayoutEffect(() => {
  //     if (!imageLoading) reflowContents();
  //   }, [imageLoading]);
  return (
    <Container ref={ContainerRef}>
      {contents.map(content => (
        <SearchResultCollection
          key={content.collectionId}
          content={content}
          type={type}
        />
      ))}
    </Container>
  );
}
SearchCollectionMasonry.propTypes = {
  type: propTypes.string,
  contents: propTypes.array,
};
export default SearchCollectionMasonry;
