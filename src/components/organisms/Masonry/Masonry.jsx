import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from 'react';
import propTypes from 'prop-types';
//import axios from 'axios';
import { Container } from './styles';
import { Post } from '../../molecules';
import defaultThumbnail from '../../../assets/images/defaultThumbnail.png';

const Masonry = ({ contents, contentType }) => {
  //const [isLoading, setIsLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(0);
  //const [ImageLoadingCount, setImageLoadingCount] = useState(0);
  const ImageLoadingCount = useRef(0);
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
  useEffect(() => {
    console.log('메서니 리렌더링!!');
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
    console.log(ContainerRef.current.children.length);
    if (ImageLoadingCount.current === ContainerRef?.current?.children?.length)
      setImageLoaded(true);
    //setImageLoadingCount(prev => prev + 1);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', onResize);
    console.log('masonry 마운트');
    //let isComponentMounted = true;
    setImageLoading(true);
    return () => {
      //isComponentMounted = false;
      window.removeEventListener('resize', onResize);
    };
  }, []);
  useEffect(() => {
    console.log('그림 추가 @#@#');
    console.log(contents.length);
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
    <Container ref={ContainerRef} Visible={!imageLoading || true}>
      {contents.map(content => (
        <Post
          key={content.id}
          title={content.title}
          poster={
            contentType === 'curation'
              ? content.thumbnailUrl.length
                ? content.thumbnailUrl
                : defaultThumbnail
              : content.thumbnailUrls.length
              ? content.thumbnailUrls
              : defaultThumbnail
          }
          onLoad={setOnLoad}
        />
      ))}
    </Container>
  );
};
Masonry.propTypes = {
  contents: propTypes.array,
  contentType: propTypes.string,
};
export default Masonry;
