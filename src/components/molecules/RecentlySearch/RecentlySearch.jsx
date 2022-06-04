import React from 'react';
import propTypes from 'prop-types';
//import { axios } from '../../../api';
import { NormalButton } from '../../atoms';
import { buttonStyle, Container, Contents, Title } from './styles';

// const dummies = [
//   { id: 0, title: '어바웃타임' },
//   { id: 1, title: '크리스마스' },
//   { id: 2, title: '해리포터' },
//   { id: 3, title: '판타지' },
//   { id: 4, title: '다크나이트' },
// ];
const colors = ['#2800ee', '#f24860', '#bc32ea', '#f9cf00', '#000000'];
function RecentlySearch({ contents }) {
  // const [contents, setContents] = useState([]);
  // const componentMounted = useRef(true);
  // const requestRecentlySearch = async () => {
  //   try {
  //     const res = await axios({
  //       method: 'get',
  //       url: '/api/member/search',
  //       data: null,
  //       params: {
  //         length: 5,
  //       },
  //     });
  //     if (componentMounted) {
  //       console.log(res);
  //       setContents([...contents, ...res.data.data]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useLayoutEffect(() => {
  //   componentMounted.current = true;
  //   if (isSignIn) requestRecentlySearch();
  //   return () => {
  //     componentMounted.current = false;
  //   };
  // }, [isSignIn]);
  return (
    <Container>
      <Title>최근 검색 기록</Title>
      <Contents>
        {contents.map(content => {
          const randColor = colors[Math.floor(Math.random() * 5)];
          return (
            <NormalButton
              key={content.id}
              Style={{ ...buttonStyle, background: `${randColor}` }}
            >
              {content.content}
            </NormalButton>
          );
        })}
      </Contents>
    </Container>
  );
}
RecentlySearch.propTypes = {
  isSignIn: propTypes.bool,
  contents: propTypes.array,
};
export default RecentlySearch;
